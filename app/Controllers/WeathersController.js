import { ProxyState } from "../AppState.js"
import { weathersService } from "../Services/WeathersService.js";

function _drawWeather() {
  let weather = ProxyState.weather
  let weatherElem = document.getElementById('weather')
  weatherElem.innerHTML = weather.Template

}

export class WeathersController {
  constructor() {
    this.getWeather()
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