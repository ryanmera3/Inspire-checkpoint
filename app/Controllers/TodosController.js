import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _draw() {
  let todo = ProxyState.Todo
  let template = ''
  todo.forEach(t => template += t.Template)
  document.getElementById('todo-form').innerHTML = template
}

function _drawCount() {
  const todo = ProxyState.Todo
  let template = ''
  let countTodo = todo.filter(t => t.completed).length
  template = `<h4 class="text-info"> ${countTodo}/${todo.length}</h4>`
  document.getElementById('my-count').innerHTML = template

}


export class TodosController {
  constructor() {
    ProxyState.on('Todo', _draw)
    ProxyState.on('Todo', this.isChecked)
    ProxyState.on('Todo', _drawCount)
    this.isChecked()
    this.addTodo()
    _draw()
    _drawCount()

  }

  async getTodo(id) {
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

  async putTodo(id) {
    try {
      await todosService.putTodo(id)
    } catch (error) {
      console.error("putTodo is broken", error)

    }
  }
  async isChecked(id) {
    try {
      await todosService.isChecked(id)
    } catch (error) {
      console.error("isChecked controller is busted", error)

    }
  }
}