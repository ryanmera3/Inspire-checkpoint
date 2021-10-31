import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxWeatherApi } from "../Services/AxiosService.js"

class WeatherService {


  async getWeather() {
    const res = await sandboxWeatherApi.get('weather')
    ProxyState.weather = new Weather(res.data)
    ProxyState.weather = ProxyState.weather
    console.log(ProxyState.weather);
  }

}

export const weathersService = new WeatherService()