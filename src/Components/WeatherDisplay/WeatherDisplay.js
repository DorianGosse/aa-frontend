import React from 'react'
import './WeatherDisplay.css'
import { getWeatherData } from '../../Utils/fetchWeatherData'

import Header from '../Header'



const cities = [
  { name: 'Winnipeg', lat: 49.8954, lng: -97.1385 },
  { name: `Halifax`, lat: 44.6476, lng: -63.5728 },
  { name: 'Greenwood', lat: 44.9717, lng: -64.9341 }
]

const testWeatherData = {
  temp: '19', conditions: 'sunny', 
}

class WeatherDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedCity: cities[0]
    }
  }

  componentDidMount() {
    getWeatherData(this.state.selectedCity)
  }

  render() {

    const handleCityToggle = citySelected => {
      this.setState({ selectedCity: citySelected })
    }

    const createTodaysWeather = currentWeatherData => (
      <div className='todays-weather'>
        Today
        {/* {currentWeather} */}
        <div className='weather-display-continer'>
          <div className='weather-img'>
            something
          </div>
          <div className='weather-temp-container'>
            <div> {currentWeatherData.temp} <span className='degree'> &deg; </span> </div>
            <div> {currentWeatherData.conditions} </div>
          </div>
        </div>
      </div>
    )

    return (
      <div className='weather-display'>
        <Header locations={cities} handleCityToggle={handleCityToggle}/>
        {createTodaysWeather(testWeatherData)}
      </div>
    )
  }
}

export default WeatherDisplay