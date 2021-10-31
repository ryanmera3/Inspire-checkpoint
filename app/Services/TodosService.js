import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxTodoApi } from "./AxiosService.js"



class TodosService {


  async getTodo(newTodo) {
    let result = await sandboxTodoApi.post('/ryanm/todos', newTodo)
    const results = new Todo(result.data)
    ProxyState.Todo = [...ProxyState.Todo, results]
  }
  async addTodo() {
    let res = await sandboxTodoApi.get('/ryanm/todos')
    ProxyState.Todo = res.data.map(t => new Todo(t))
    ProxyState.Todo = ProxyState.Todo
  }

  async deleteTodo(id) {
    if (window.confirm('Are you sure you want to delete this item?')) {

      await sandboxTodoApi.delete('/ryanm/todos/' + id)
      ProxyState.Todo = ProxyState.Todo.filter(t => t.id != id)
      ProxyState.Todo = ProxyState.Todo
    }
  }
  async putTodo(id) {
    // const found = ProxyState.Todo.findIndex(f => f.id == id)
    let find = ProxyState.Todo.find(f => f.id == id)
    const res = await sandboxTodoApi.put('ryanm/todos/' + id, find)
    find = new Todo(res.data)
    ProxyState.Todo = ProxyState.Todo
    console.log(find, res.data);
  }
  isChecked(id) {
    let found = ProxyState.Todo
    found.forEach(f => {
      if (f.id == id) {
        f.completed = !f.completed
      }
    })
    return ProxyState.Todo
  }
}


export const todosService = new TodosService()