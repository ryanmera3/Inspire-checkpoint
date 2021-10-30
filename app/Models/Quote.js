export class Quote {
  constructor(data) {
    this.id = data.id || ''
    this.content = data.content || ''
    this.author = data.author || ''
  }

  get Template() {
    return `
    <h6>"${this.content}"</h6>
    <p> ${this.author}</p>
    `
  }
}