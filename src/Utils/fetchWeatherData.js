  const key = '198d2fc27d0b5ee3b03469c6fa4b7fbc'

export const getWeatherData = async (queryData, setCurrentWeather) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${queryData.lat}&lon=${queryData.lng}&appid=${key}&units=metric`
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log('data', data)
    setCurrentWeather(data)
  } catch (e) {
    console.log('error fetching weather data', e.message)
  }
}

export const get4DayForcast = async (queryData, setForcastData) => {
  const url = `api.openweathermap.org/data/2.5/forecast?lat=${queryData.lat}&lon=${queryData.lng}&appid=${key}&units=metric`
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log('forecast data', data)
    setForcastData(data)
  }
  catch (e) {
    console.log('error fetching forecast data:', e.message)
  }

}