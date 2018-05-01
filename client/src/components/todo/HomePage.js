import React, { Component } from 'react';
import TodoActions from '../../actions/TodoActions'
import TodoStore from '../../stores/TodoStore'
import TodoListing from '../../components/todo/TodoListing'

class HomePage extends Component {
  constructor (props){
    super (props)

    this.state = {
      todos:[]
    }

    this.handleTodosRetrieved = this.handleTodosRetrieved.bind(this)

    TodoStore.on(TodoStore.eventTypes.TODOS_RETRIEVED,this.handleTodosRetrieved)
  }

  componentDidMount(){
      TodoActions.all()
  }
  componentWillUnmount(){
      TodoStore.removeListener(TodoStore.eventTypes.TODOS_RETRIEVED,this.handleTodosRetrieved)
  }

  handleTodosRetrieved(data){
      let todos = data.todos
      this.setState({todos})
      console.log(this.state.todos)
  }

  redirectToDetails(id){
    this.props.history.push(`/details/${id}`)
  }

  render(){

      let todos =  this.state.todos.map(todo => {
          return <TodoListing
              key={todo._id}
              todo={todo}
              redirect={this.redirectToDetails.bind(this, todo._id)}

          />
      })

    return (
      <div>
        <h1>Welcome to Todos!</h1>
        <hr></hr>
        <ul>
            {todos}
        </ul>
      </div>
    )
  }

}

export default HomePage