import {EventEmitter} from 'events'
import dispatcher from '../dispatcher/dispatcher'
import TodoActions from '../actions/TodoActions'
import TodoData from '../data/TodoData'

class  TodoStore extends EventEmitter{


    getAll(){
        TodoData.getTodos()
            .then(response=>{
                this.emit(this.eventTypes.TODOS_RETRIEVED,response.data)
            })
            .catch()
    }

    creteTodo(todo){
        TodoData.creteTodo(todo)
            .then(response => {
                this.emit(this.eventTypes.CREATE_TODO, response)
            })
            .catch()
    }

    handleAction (action) {
        switch (action.type) {
            case TodoActions.types.ALL_TODOS: {
                this.getAll()
                break
            }
            case TodoActions.types.CREATE_TODO:{
                this.creteTodo(action.todo)
                break
            }
            default:break
        }
    }

}

let todoStore = new TodoStore();

todoStore.eventTypes = {
    TODOS_RETRIEVED: 'todos_retrieved',
    TODO_CREATE:'todo_crete'
}

dispatcher.register(todoStore.handleAction.bind(todoStore))

export default todoStore
