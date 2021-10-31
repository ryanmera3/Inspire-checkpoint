export class Image {
  constructor(data) {
    this.url = data.largeImgUrl || ''
    this.tags = data.tags || ''
    this.query = data.query || ''
    this.author = data.author || ''
  }

  get Template() {
    return `
    <h6 small class="mb-3"> Tags: ${this.tags} </h6 small>
    <h6 small class="mb-3"> Author: ${this.author}</h6 small>
    `
  }


}