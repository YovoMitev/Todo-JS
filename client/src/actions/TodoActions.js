import dispatcher from '../dispatcher/dispatcher'

let TodoActions = {
    types:{
        ALL_TODOS:'ALL_TODOS'
    },

    all() {
        dispatcher.dispatch({
            type:this.types.ALL_TODOS
        })
    }
}

export default TodoActions
