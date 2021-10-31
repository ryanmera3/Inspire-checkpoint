export class Quote {
  constructor(data) {
    this.id = data.id || ''
    this.content = data.content || ''
    this.author = data.author || ''
  }

  get Template() {
    return `
    <h6 small class="quote hover">"${this.content}"</h6 small>
    <h6 small class="author-hover"> -${this.author}</h6 small>
    `
  }
}