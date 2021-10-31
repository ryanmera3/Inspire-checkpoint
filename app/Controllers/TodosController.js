import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _draw() {
  let todo = ProxyState.Todo
  let template = ''
  todo.forEach(t => template += t.Template)
  document.getElementById('todo-form').innerHTML = template
}


export class TodosController {
  constructor() {
    ProxyState.on('Todo', _draw)
    this.addTodo()
    this.getTodo()
    _draw()

  }

  async getTodo(event) {
    try {

      window.event.preventDefault()
      const form = window.event.target
      const newForm = {
        // @ts-ignore
        description: form.description.value
      }
      await todosService.getTodo(newForm)

      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('Gettodo', error)
    }
  }
  async addTodo() {
    try {

      await todosService.addTodo()
    } catch (error) {
      console.error("Addtodo is broken", error)
    }
  }
  async deleteTodo(id) {
    try {
      await todosService.deleteTodo(id)
    } catch (error) {
      console.error("DeleteTodo is broken", error)
    }
  }
}