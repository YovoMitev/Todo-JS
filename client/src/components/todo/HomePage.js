import React, {Component} from 'react';
import TodoActions from '../../actions/TodoActions'
import TodoStore from '../../stores/TodoStore'
import TodoListing from '../../components/todo/TodoListing'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }

        this.handleTodosRetrieved = this.handleTodosRetrieved.bind(this)

        TodoStore.on(TodoStore.eventTypes.TODOS_RETRIEVED, this.handleTodosRetrieved)

        this.handleCompletedTodo = this.handleCompletedTodo.bind(this)

        TodoStore.on(TodoStore.eventTypes.TODO_UPDATED, this.handleCompletedTodo)
    }

    handleCompletedTodo(){
        this.props.history.push('/')
    }

    componentDidMount() {
        TodoActions.all()
    }

    componentWillUnmount() {
        TodoStore.removeListener(TodoStore.eventTypes.TODOS_RETRIEVED, this.handleTodosRetrieved)
        TodoStore.removeListener(TodoStore.eventTypes.TODO_UPDATED, this.handleCompletedTodo)
    }

    completeTodo(todo) {
        todo.completed = true
        TodoActions.update(todo)
    }

    handleTodosRetrieved(data) {
        let todos = data.todos
        this.setState({todos})

    }

    redirectToDetails(id) {
        this.props.history.push(`/details/${id}`)
    }

    render() {
        let allTodos = this.state.todos

        let todos = allTodos.map(todo => {
            if (!todo.completed){
                return<TodoListing
                    key={todo._id}
                    todo={todo}
                    redirect={this.redirectToDetails.bind(this, todo._id)}
                    completeTodo={this.completeTodo.bind(this, todo)}
                />
            }
        })

       const result = allTodos.filter(todo => todo.completed)

        let completedTodos = result.map(todo => {
                return <TodoListing
                    key={todo._id}
                    todo={todo}
                    redirect={this.redirectToDetails.bind(this, todo._id)}
                    completeTodo={this.completeTodo.bind(this, todo)}
                />

        })


        return (
            <div>
                <h1 className='text-center'>Welcome to Todos!</h1>
                <hr></hr>
                <ul className='list-group'>
                    {todos}
                </ul>

                {completedTodos.length === 0
                    ?
                    <h2 className='text-center'>No completed Todos</h2>
                    :
                    <div>
                    <h2 className='text-center'>Completed Todos</h2>
                    <ul className='list-group'>
                    {completedTodos}
                    </ul>
                    </div>
                }
            </div>
        )
    }

}

export default HomePage