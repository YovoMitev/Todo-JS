import dispatcher from '../dispatcher/dispatcher'

let TodoActions = {
    types:{
        ALL_TODOS:'ALL_TODOS',
        CREATE_TODO:'CREATE_TODO'
    },

    all() {
        dispatcher.dispatch({
            type:this.types.ALL_TODOS
        })
    },

    create(todo){
        dispatcher.dispatch({
            type:this.types.CREATE_TODO,
            todo
        })
    }
}

export default TodoActions
