import React from 'react'

import './Loading.css'

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className='loading-container'>
        <div className='loading-spinner'/>
      </div>
    )
  }
}

export default LoadingSpinner