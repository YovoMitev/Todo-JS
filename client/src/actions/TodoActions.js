import dispatcher from '../dispatcher/dispatcher'

let TodoActions = {
  types: {
    ALL_TODOS: 'ALL_TODOS',
    CREATE_TODO: 'CREATE_TODO',
    GET_DETAILS: 'GET_DETAILS',
    DELETE_TODO: 'DELETE_TODO',
    UPDATE_TODO: 'UPDATE_TODO'
  },

  all () {
    dispatcher.dispatch({
      type: this.types.ALL_TODOS
    })
  },

  create (todo) {
    dispatcher.dispatch({
      type: this.types.CREATE_TODO,
      todo
    })
  },

  update (todo) {
    dispatcher.dispatch({
      type: this.types.UPDATE_TODO,
      todo
    })
  },

  details (id) {
    dispatcher.dispatch({
      type: this.types.GET_DETAILS,
      id
    })
  },

  delete (id) {
    dispatcher.dispatch({
      type: this.types.DELETE_TODO,
      id
    })
  }
}

export default TodoActions
