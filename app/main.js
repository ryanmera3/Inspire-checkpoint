import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";


class App {
  weathersController = new WeathersController()
  imagesController = new ImagesController()

  quotesController = new QuotesController()
}

window["app"] = new App();
