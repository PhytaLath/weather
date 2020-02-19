import React, { useState, useEffect } from 'react'
import { getWeather, getWeatherByCity, getWeatherByCoords } from '../actions/weatherAction';
//import { mockWeather } from '../mocks/mockWeather';



function Weather() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Tokyo");

  useEffect(()=>{
    loadWeatherData();
    // navigator.geolocation.getCurrentPosition(loadWeatherData, geError)
  },[city])

  function kelvinCelsius(tempKelvin){
    return Math.round(tempKelvin - 273.15);
  }

  function handleChange(event)
  {
    setCity(event.target.value);
  }

  async function loadWeatherData(){
    const weatherAjax = await getWeather(city);
    setWeather(weatherAjax.data);
    //setWeather(weatherAjax.data);
  }

  function loadIconWeather(idIcon){
    return "http://openweathermap.org/img/wn/" + idIcon + "@2x.png"
  }

  function changeCity(city)
  {
    setCity(city);
  }

  // function findLocation(pos)
  // {
  //   let crd = pos.coords;
  // }

  // function loadWeatherData()
  // {
  //
  // }

    return (
      <div>
        <div>
          <input onChange={(event) => { changeCity(event.target.value) }}></input>
        </div>
       { weather ?
        <div>
          <h1> Météo : {weather.name}</h1>
          <img alt="" src={loadIconWeather(weather.weather[0].icon)}></img>
          <p>{weather.weather[0].description}</p>
          <p>{kelvinCelsius(weather.main.temp)} C° </p>
          <p>{(weather.main.humidity)} %</p>
          <p>{(weather.wind.speed)} km/h</p>
          <p>{kelvinCelsius(weather.main.feels_like)}</p>

        </div>



        :  <div>
          <h1>Météo en attente de chargement</h1>
        </div>
      }



      </div>
    )
}


export default Weather
