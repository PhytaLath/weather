import React, { useState, useEffect } from 'react'
import { getWeather } from '../actions/weatherAction';
import { mockWeather } from '../mocks/mockWeather';



function Weather() {

  const [weather, setWeather] = useState(null);



  useEffect(()=>{
    loadWeatherData();
  },[])

  function kelvinCelsius(tempKelvin){
    return Math.round(tempKelvin - 273.15);
  }

  async function loadWeatherData(){
    const weatherAjax = await getWeather();
    setWeather(weatherAjax.data);
    //setWeather(weatherAjax.data);
  }

  function loadIconWeather(idIcon){
    return"http://openweathermap.org/img/wn/"+idIcon+"@2x.png"
  }

    return (
       <div>
       {weather ?
       <div>

        <h1> Météo : {weather.name} </h1>
        <img alt="" src={loadIconWeather(weather.weather[0].icon)}></img>
        <p>{weather.weather[0].description}</p>
        <p>{kelvinCelsius(weather.main.temp)} C° </p>
        </div>
       : <div>
       <h1>Météo en attente de chargement</h1>

}

)
export default Weather;
