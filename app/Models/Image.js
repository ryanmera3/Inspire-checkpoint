export class Image {
  constructor(data) {
    this.url = data.largeImgUrl || ''
    this.tags = data.tags || ''
    this.query = data.query || ''
    this.author = data.author || ''
  }

  get Template() {
    return `
    <p> Tags: ${this.tags} </p>
    <p> Author: ${this.author}</p>
    `
  }


}