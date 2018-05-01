import dispatcher from '../dispatcher/dispatcher'

let TodoActions = {
    types:{
        ALL_TODOS:'ALL_TODOS',
        CREATE_TODO:'CREATE_TODO',
        GET_DETAILS:'GET_DETAILS'
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
    },

    details(id){
        dispatcher.dispatch({
          type: this.types.GET_DETAILS,
          id
        })
    }
}

export default TodoActions
