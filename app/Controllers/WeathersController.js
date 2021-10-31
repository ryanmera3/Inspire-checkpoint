import { ProxyState } from "../AppState.js"
import { weathersService } from "../Services/WeathersService.js";

function _drawWeather() {
  let weather = ProxyState.weather
  let weatherElem = document.getElementById('weather')
  weatherElem.innerHTML = weather.Template

  document.getElementById('temp-switch').addEventListener("click", function () {
    if (document.getElementById('fahr')) {
      document.getElementById('fahr').classList.toggle('visually-hidden')
    }
    document.getElementById('cels').classList.toggle('visually-hidden')

  })
}

function _drawClock() {

  let date = new Date()
  let hour = date.getHours() // 0 - 23
  let minute = date.getMinutes() // 0 - 59
  let second = date.getSeconds() // 0 - 59
  let session = "AM"

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  // @ts-ignore
  hour = (hour < 10) ? "0" + hour : hour;
  // @ts-ignore
  minute = (minute < 10) ? "0" + minute : minute;
  // @ts-ignore
  second = (second < 10) ? "0" + second : second;

  let time = hour + ":" + minute + ":" + second + " " + session;
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;

  setTimeout(_drawClock, 1000);
}

export class WeathersController {
  constructor() {
    this.getWeather()
    _drawClock()
    ProxyState.on('weather', _drawWeather)
  }
  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error("Addweather is broken", error)
    }
  }

}