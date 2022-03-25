import React, { useState, useEffect } from 'react'

const Weather = () => {

  const [ api, setApi ] = useState([])
  const [place, setPlace] = useState('Lima')

  useEffect(() => {
    const getApi = async () => {
      const apiKey = 'b39b7307d80f48a181d143510211606'
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${ apiKey }&q=${place}&aqi=no`)
        const data = await response.json()
        console.log(data)
        setApi(data)
      } catch (error) {
        console.log(error)
      }
    }
    getApi()
  },[])

  const localDate = api.localtime

  if(api.current === undefined) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  const { condition, humidity, temp_f , wind_kph } = api.current


  return (
    <div className="weather-container">
      <div className="weather">
        <p className="date">{ (new Date()).toUTCString('es-MX', localDate)}</p>
        <div className="temperature-container">
          <img src={ condition.icon } alt={condition.text} />
          <div className="temperature">
            <p className="temp">{ temp_f }</p>
            <span className="fahrenheit">F°</span>
          </div>
        </div>
        <p className="condition">{ condition.text }</p>
        <div className="extra-data">
          <div className="humidity">
            <p className="title">Humidity</p>
            <p className="description">{ humidity }</p>
          </div>
          <div className="wind">
            <p className="title">Wind speed</p>
            <p className="description">{ wind_kph } kp/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather