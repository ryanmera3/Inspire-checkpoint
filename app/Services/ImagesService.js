import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandboxImageApi, sandboxWeatherApi } from "./AxiosService.js"

class ImagesService {
  constructor() {
    console.log("Images Service is loaded")
  }

  async getImage() {
    const res = await sandboxImageApi.get('images')
    ProxyState.image = new Image(res.data)

  }
}

export const imagesService = new ImagesService()