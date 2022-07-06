import React from 'react'
import './App.css';

import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WeatherDisplay />
      </div>
    )
  }

}

export default App;
