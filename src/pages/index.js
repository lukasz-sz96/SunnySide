import React, { useEffect, useState } from "react"

import GlobalStyle from "../GlobalStyle"
import SEO from "../components/seo"
import { getWeather } from "../utils/getWeather"
import SearchBar from "../components/SearchBar"
import ForecastBox from "../components/ForecastBox"

const IndexPage = () => {
  const [city, setCity] = useState()
  const [weather, setWeather] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    console.log("ww " + city)
    getWeather(city).then(data => {
      console.log(data)
      if (data.cod == "200") {
        setWeather(data)
      } else {
        alert(data.message)
      }
    })
  }


  return (
    <div>
      <SEO title="Home" />
      <GlobalStyle />
      <div className="wrapper">
        <div className="searchBar">
          <form onSubmit={handleSubmit}>
            <SearchBar type="text" onChange={e => setCity(e.target.value)} />
          </form>
        </div>
        {weather ? (
          <>
            <div className="topView">
              <div>
                <h2>{weather.city.name}</h2>
                <p>Temperature: {weather.list[0].main.temp} C</p>
              </div>
            </div>
            <div className="bottomView">
              {weather.list.slice(0, 5).map(el => (
                <ForecastBox key={el.dt}>
                  <h3>{new Date(el.dt * 1000).toLocaleDateString("en-US", { weekday: 'long', hour: '2-digit' })}</h3>
                  <span>Temperature: {el.main.temp}</span>
                </ForecastBox>
              ))}
            </div>
          </>
        ) : (
          <h1>w</h1>
        )}
      </div>
    </div>
  )
}

export default IndexPage
