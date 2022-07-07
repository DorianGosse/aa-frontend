
export const getWeatherData = async (queryData) => {
  const key = '198d2fc27d0b5ee3b03469c6fa4b7fbc'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${queryData.lat}&lon=${queryData.lng}&appid=${key}`

  const response = await fetch(url)
  const data = await response.json()
  console.log('data', data)
}