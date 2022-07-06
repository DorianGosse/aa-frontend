import React from 'react'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: props.locations,
      selectedCity: props.locations[0]
    }
  }
  render() {

  const handleCityOnClick = location => {
    this.props.handleCityToggle(location)
    this.setState({ selectedCity: location })
  }

    return (
      <div className='weather-header'>
        {this.state.locations.map(location => (
          <div
            className={this.state.selectedCity === location ? 'selected-city' : 'city-toggle'}
            key={`${location.name}-${location.lat}-${location.lng}`}
            onClick={() => handleCityOnClick(location)}>
            {location.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Header