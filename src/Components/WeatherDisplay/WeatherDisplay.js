import React from 'react'
import './WeatherDisplay.css'

import Header from '../Header'

class WeatherDisplay extends React.Component {
  render() {
    return (
      <div className='weather-display'>
        <Header />
      </div>
    )
  }
}

export default WeatherDisplay