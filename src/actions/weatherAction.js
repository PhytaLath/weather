import axios from 'axios';

const baseUrl = "http://api.openweathermap.org/data/2.5";
constappId= "appid=ded54adbeff44f01f33001275ababa22"";

export function getWeather(){
  return axios.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=ded54adbeff44f01f33001275ababa22")
}
