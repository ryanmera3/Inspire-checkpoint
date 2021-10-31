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
    await sandboxTodoApi.delete('/ryanm/todos/' + id)
    ProxyState.Todo = ProxyState.Todo.filter(t => t.id != id)
    ProxyState.Todo = ProxyState.Todo
  }
}

export const todosService = new TodosService()