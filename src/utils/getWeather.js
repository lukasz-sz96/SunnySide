const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=`
const API_KEY = `your_api_key`
const units = `metric` // 'metric' or 'imperial'

export const getWeather = async city => {
  const request = fetch(`${API_URL}${city}&appid=${API_KEY}&units=${units}`)
  const response = await request
  return await response.json()
}
