import React, { useState } from "react"

import GlobalStyle from "../GlobalStyle"
import SEO from "../components/seo"
import { getWeather } from "../utils/getWeather"
import SearchBar from "../components/SearchBar"
import ForecastBox from "../components/ForecastBox"
import Button from "../components/Button"
import Sunny from "../components/Sunny"

const IndexPage = () => {
  const [city, setCity] = useState()
  const [weather, setWeather] = useState()
  const [show, setShow] = useState(7)

  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    getWeather(city).then(data => {
      console.log(data)
      if (data.cod === "200") {
        setWeather(data)
      } else {
        alert(data.message)
      }
    })
  }

  const handleClick = () => {
    setShow(19)
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
                <Sunny />
                <h2>{weather.city.name}</h2>
                <p>Temperature: {weather.list[0].main.temp} C</p>
              </div>
            </div>
            <div className="bottomView">
              <div className="btnExpand">
                <Button
                  onClick={e => {
                    handleClick(e)
                  }}
                >
                  Show more
                </Button>
              </div>
              <div className="boxes">
                {weather.list.slice(1, show).map((el, index) => (
                  <ForecastBox variant="show" key={`ForecastBox_${index}`}>
                    <h3>
                      {new Date(el.dt * 1000).toLocaleDateString("en-EN", {
                        weekday: "long",
                        hour: "2-digit",
                      })}
                    </h3>
                    <span>Temperature: {el.main.temp} C</span>
                  </ForecastBox>
                ))}
              </div>
            </div>
          </>
        ) : (
          <h2 className="topView">No data</h2>
        )}
      </div>
    </div>
  )
}

export default IndexPage
