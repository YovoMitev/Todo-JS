import React, { Component } from 'react';
import TodoActions from '../../actions/TodoActions'
import TodoStore from '../../stores/TodoStore'
import CreateTodoForm from './CreateTodoForm'

class CreateTodoPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            todo:{
                title:'',
                body:''
            }
        }
        this.saveTodo = this.saveTodo.bind(this)
        TodoStore.on(TodoStore.eventTypes.CREATE_TODO,this.saveTodo)
    }

    componentWillUnmount(){
        TodoStore.removeListener(TodoStore.eventTypes.CREATE_TODO,this.saveTodo)
    }


    saveTodo(response){
      const todo = response.data.createdTodo
      this.props.history.push(`/details/${todo._id}`)
    }

    handleInput(event) {
        const target = event.target
        const name = target.name
        const value = target.value

        let todo = this.state.todo
        todo[name] = value

        this.setState({todo})
    }

    handleTodoSave(event){
        event.preventDefault()
        TodoActions.create(this.state.todo)
    }

    render(){
        return(
            <div>
                <h1>Create todo page</h1>
                <CreateTodoForm
                    todo={this.state.todo}
                    onChange={this.handleInput.bind(this)}
                    onSave={this.handleTodoSave.bind(this)}
                />
            </div>
        )
    }
}

export default  CreateTodoPage