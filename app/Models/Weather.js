export class Weather {
  constructor(data) {
    this.id = data.id
    this.name = data.name || ''
    this.main = Math.floor((data.main.temp - 273.15) * (9 / 5) + 32)
    this.celsius = Math.floor(data.main.temp - 273.15)
    this.weather = data.weather[0].description || ''
  }

  get Template() {
    return `<h4 class="text-end">${this.main}°F / ${this.celsius}°C</h4>
    <h4 class=" my-1text-end"> ${this.name}</h4>
    `

  }

}