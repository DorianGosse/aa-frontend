import React from 'react'
import './WeatherDisplay.css'

import Header from '../Header'

const cities = [
  { name: 'Winnipeg', lat: 1234, lng: 1234 },
  { name: `Halifax`, lat: 3333, lng: 3342 },
  { name: 'Greenwood', lat: 3342, lng: 435345 }
]

class WeatherDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedCity: cities[0]
    }
  }

  render() {
    const handleCityToggle = citySelected => {
      this.setState({ selectedCity: citySelected })
    }

    return (
      <div className='weather-display'>
        <Header locations={cities} handleCityToggle={handleCityToggle}/>
      </div>
    )
  }
}

export default WeatherDisplay