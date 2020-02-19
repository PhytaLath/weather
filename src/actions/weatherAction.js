import axios from 'axios';

const baseUrl = "http://api.openweathermap.org/data/2.5";
const appId = "&appid=ded54adbeff44f01f33001275ababa22";

export function getWeather(city){
  return axios.get(baseUrl + "/weather?q=London" + appId)
}

export function getWeatherbyCity(city) {
  return axios.get(baseUrl + "/weather?q=" + city + appId);
}

export function getWeatherByCoords(coords) {
  return axios.get(baseUrl + "/weather?lat=" + coords.latitude + "&lon=" + coords.longitude + "&" + appId)
}
