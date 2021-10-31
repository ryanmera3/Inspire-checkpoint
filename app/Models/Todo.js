

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
      ${this.Checkbox}
      ${this.description}
      </label>
      <div class="w-100 d-flex justify-content-end">
      ${this.Button}
      </div>
    </div>
    </li>
    `
  }
  get Checkbox() {
    if (!this.id) {
      return ``
    }
    return `
    <input class=" me-2" type="checkbox" name="completed" id="completed" id="flexCheckDefault" ${this.completed ? "checked" : ' '} onclick="app.todosController.isChecked('${this.id}'); app.todosController.putTodo('${this.id}')">
      <label class=" mx-2 justify-content-start" for="flexCheckDefault">
    `
  }
  get Button() {
    return `
      <button type="button" class="btn btn-danger btn-sm mdi mdi-trash-can-outline" onclick="app.todosController.deleteTodo('${this.id}')"> </button>
    `
  }
}