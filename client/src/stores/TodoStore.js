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

    handleAction (action) {
        switch (action.type) {
            case TodoActions.types.ALL_TODOS: {
                this.getAll()
                break
            }
            default:break
        }
    }

}

let todoStore = new TodoStore();

todoStore.eventTypes = {
    TODOS_RETRIEVED: 'todos_retrieved'
}

dispatcher.register(todoStore.handleAction.bind(todoStore))

export default todoStore
