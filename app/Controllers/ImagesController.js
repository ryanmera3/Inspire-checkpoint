import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js";

function _drawImage() {
  let image = ProxyState.image
  document.body.style.backgroundImage = `url(${image.url})`
  document.body.style.backgroundRepeat = `no-repeat`
  document.body.style.backgroundSize = `cover`

  let imgElem = document.getElementById('image')
  imgElem.innerHTML = image.Template
}

export class ImagesController {
  constructor() {
    this.getImage()
    ProxyState.on('image', _drawImage)
    console.log(("The weather controller is working"));
  }
  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error("Addweather is broken", error)
    }
  }
}