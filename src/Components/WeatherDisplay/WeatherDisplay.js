import React from 'react'
import './WeatherDisplay.css'

import { getWeatherData, get4DayForcast } from '../../Utils/fetchWeatherData'
import { getDayOfWeek } from '../../Utils/dateCalculations'

import Header from '../Header'
import LoadingSpinner from '../Loading'


const cities = [
  { name: 'Winnipeg', lat: 49.8954, lng: -97.1385 },
  { name: `Halifax`, lat: 44.6476, lng: -63.5728 },
  { name: 'Greenwood', lat: 44.9717, lng: -64.9341 }
]

class WeatherDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedCity: cities[0],
      currentWeather: {},
      forecastData: [],
      loading: true
    }
  }
  
  componentDidMount() {
    getWeatherData(this.state.selectedCity, weatherData => this.setState({ currentWeather: weatherData }))
    get4DayForcast(this.state.selectedCity, weatherData => this.setState({ forecastData: weatherData }))
    this.setState({ loading: !this.state.loading })
  }


  render() {
    const currentDeg = this.state.currentWeather.main
    const currentConditions = this.state.currentWeather.weather
    
    const handleCityToggle = citySelected => {
      this.setState({
        selectedCity: citySelected,
        currentWeather: getWeatherData(citySelected, weatherData => this.setState({ currentWeather: weatherData })),
        forecastData: get4DayForcast(citySelected, weatherData => this.setState({ forecastData: weatherData }))
      })
    }

    const createTodaysWeather = () => (
      <div className='todays-weather'>
        Today
        <div className='weather-display-continer'>
          <div className='weather-img'>
            <img src={currentConditions && `http://openweathermap.org/img/w/${currentConditions[0].icon}.png`} />
          </div>
          <div className='weather-temp-container'>
            <div> {currentDeg && currentDeg.temp.toFixed()} <span className='degree'> &deg; </span> </div>
            <div> {currentConditions && currentConditions[0].main} </div>
          </div>
        </div>
      </div>
    )

    const getForecastData = daysInFuture => (
      <div className='flex-container-column'>
        <div> {getDayOfWeek(daysInFuture)} </div>
        <div>
          {this.state.forecastData.length && <img src={`http://openweathermap.org/img/w/${this.state.forecastData[daysInFuture -1].weather[0].icon}.png`} />} </div>
        <div> {this.state.forecastData.length && this.state.forecastData[daysInFuture - 1].main.temp.toFixed()} &deg; </div>
      </div>
    )

    const create4DayForecast = () => (
      <div className='forecast-container'>
        {getForecastData(1)}
        {getForecastData(2)}
        {getForecastData(3)}
        {getForecastData(4)}
      </div>
    )

    return (
      <div className='weather-display'>
        {this.state.loading
        ? <>
            <Header locations={cities} handleCityToggle={handleCityToggle}/>
            <LoadingSpinner />
          </> 
        : <>
            <Header locations={cities} handleCityToggle={handleCityToggle}/>
            {createTodaysWeather()}
            {create4DayForecast()}
          </>
        }
      </div>
    )
  }
}

export default WeatherDisplay