import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/dispatcher'
import TodoActions from '../actions/TodoActions'
import TodoData from '../data/TodoData'

class TodoStore extends EventEmitter {

  getAll () {
    TodoData.getTodos()
      .then(response => {
        this.emit(this.eventTypes.TODOS_RETRIEVED, response.data)
      })
      .catch()
  }

  creteTodo (todo) {
    TodoData.creteTodo(todo)
      .then(response => {
        this.emit(this.eventTypes.CREATE_TODO, response)
      })
      .catch()
  }

  details (id) {
    TodoData
      .details(id)
      .then(response => this.emit(this.eventTypes.DETAILS_RETRIEVED, response.data))
  }

  delete (id) {
    TodoData
      .deleteTodo(id)
      .then(response => this.emit(this.eventTypes.TODO_DELETED))
  }

  handleAction (action) {
    switch (action.type) {
      case TodoActions.types.ALL_TODOS: {
        this.getAll()
        break
      }
      case TodoActions.types.CREATE_TODO: {
        this.creteTodo(action.todo)
        break
      }
      case TodoActions.types.GET_DETAILS: {
        this.details(action.id)
        break
      }
      case TodoActions.types.DELETE_TODO: {
        this.delete(action.id)
        break
      }
      default:
        break
    }
  }

}

let todoStore = new TodoStore()

todoStore.eventTypes = {
  TODOS_RETRIEVED: 'todos_retrieved',
  TODO_CREATE: 'todo_crete',
  DETAILS_RETRIEVED: 'details_retrieved',
  TODO_DELETED: 'todo_deleted'
}

dispatcher.register(todoStore.handleAction.bind(todoStore))

export default todoStore
