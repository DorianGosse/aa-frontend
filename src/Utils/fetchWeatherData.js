  const key = '198d2fc27d0b5ee3b03469c6fa4b7fbc'

export const getWeatherData = async (queryData, setCurrentWeather, setLoading) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${queryData.lat}&lon=${queryData.lng}&appid=${key}&units=metric`
  try {
    setLoading(true)

    const response = await fetch(url)
    const data = await response.json()
    setCurrentWeather(data)
    setLoading(false)
  } catch (e) {
    console.log('error fetching weather data', e.message)
  }
}

export const get4DayForcast = async (queryData, setForcastData, setLoading) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${queryData.lat}&lon=${queryData.lng}&appid=${key}&units=metric`
  try {
    setLoading(true)

    const response = await fetch(url)
    const data = await response.json()
    const dailyNoonWeather = []

    for (let i = 4; i < data.list.length; i+= 8) {
      dailyNoonWeather.push(data.list[i])
    }
    console.log('data', dailyNoonWeather)
    setForcastData(dailyNoonWeather)
    setLoading(false)
  }
  catch (e) {
    console.log('error fetching forecast data:', e.message)
  }

}