import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxWeatherApi } from "../Services/AxiosService.js"

class WeatherService {
  constructor() {
    console.log("Weathers Service is loaded")
  }

  async getWeather() {
    const res = await sandboxWeatherApi.get('weather')
    ProxyState.weather = new Weather(res.data)
    console.log(ProxyState.weather);

  }
}

export const weathersService = new WeatherService()