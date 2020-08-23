import { useStaticQuery, graphql } from "gatsby"

const API_KEY = `your_api_key`

export const getWeather = async city => {
  const request = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
  const response = await request
  const json = await response.json()
  return json
}
