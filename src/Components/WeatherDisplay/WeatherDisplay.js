import React from 'react'
import './WeatherDisplay.css'

import Header from '../Header'

const cities = [
  { name: 'Winnipeg', lat: 1234, lng: 1234 },
  { name: `Halifax`, lat: 3333, lng: 3342 },
  { name: 'Greenwood', lat: 3342, lng: 435345 }
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