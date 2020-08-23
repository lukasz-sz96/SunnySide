import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import './main.css'
import SEO from "../components/seo"
import { getWeather } from "../utils/getWeather"

const IndexPage = () => {
  const [weather, setWeather] = useState()

  const handleInput = e => {
    if (e.keyCode == 13) {
      getWeather(e.target.value).then(data => {
        if (data) {
          setWeather(data)
        }
      })
    }
  }

  return (
    <div>
      <SEO title="Home" />
      <input type="text" placeholder="Input city name" onKeyDown={handleInput} />
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <h2>Temperature: {weather.main.temp}</h2>
        </div>
      ) : (
        <h2>No data</h2>
      )}
    </div>
  )
}

export default IndexPage
