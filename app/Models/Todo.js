

export class Todo {
  constructor(data) {
    this.id = data.id || ''
    this.completed = data.completed || false
    this.description = data.description || ''
    this.user = data.user || ''
  }

  get Template() {
    return `
    <li>
    <div class="d-flex justify-content-start">
      <input class=" me-2" type="checkbox" value="" id="flexCheckDefault">
      <label class=" mx-2 justify-content-start" for="flexCheckDefault" ${this.completed ? "checked" : " "}>
      ${this.description}
      </label>
      <div class="w-100 d-flex justify-content-end">
      <button type="button" class="btn btn-danger btn-sm mdi mdi-trash-can-outline" onclick="app.todosController.deleteTodo('${this.id}')"> </button>
      </div>
    </div>
    </li>
    `
  }
}