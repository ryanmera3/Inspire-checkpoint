export class Weather {
  constructor(data) {
    this.id = data.id
    this.name = data.name || ''
    this.main = Math.floor((data.main.temp - 273.15) * (9 / 5) + 32)
    this.weather = data.weather[0].description || ''
  }

  get Template() {
    return `<h3 class="text-end">${this.main}°F</h3>
    <h4 class=" my-1text-end"> ${this.name}</h4>
    `

  }

}