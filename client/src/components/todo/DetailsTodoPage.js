import React, { Component } from 'react';
import TodoActions from '../../actions/TodoActions'
import TodoStore from '../../stores/TodoStore'
import DetailsTodoForm from './DetailsTodoForm'

class DetailsTodoPage extends Component{
  constructor(props){
    super(props)

    this.id = this.props.match.params.id

    this.state = {
      todo:{
        title:'',
        body:'',
        _id: ''
      }
    }

    this.handleRetrievedDetailsData = this.handleRetrievedDetailsData.bind(this)

    TodoStore.on(
      TodoStore.eventTypes.DETAILS_RETRIEVED,
      this.handleRetrievedDetailsData
    )

    this.handleDeletedTodo = this.handleDeletedTodo.bind(this)
    TodoStore.on(
      TodoStore.eventTypes.TODO_DELETED,
      this.handleDeletedTodo
    )
  }

  handleDeletedTodo(){
    this.props.history.push('/')
  }

  componentWillUnmount(){
     TodoStore.removeListener(
       TodoStore.eventTypes.DETAILS_RETRIEVED,
       this.handleRetrievedDetailsData
     )

    TodoStore.removeListener(
      TodoStore.eventTypes.TODO_DELETED,
      this.handleDeletedTodo
    )
  }

  componentDidMount(){
    TodoActions.details(this.id)
  }

  handleRetrievedDetailsData(data) {
     let todo = data.todo

     this.setState({todo})
  }

  handleDeleteTodo(event) {
    event.preventDefault()

    TodoActions.delete(this.id)
  }

  handleInput(event) {
    const target = event.target
    const name = target.name
    const value = target.value

    let todo = this.state.todo
    todo[name] = value

    this.setState({todo})
  }

  render(){

    return(
      <div>
        <h1>Details Todo Page</h1>
        <DetailsTodoForm
          todo={this.state.todo}
          onChange={this.handleInput.bind(this)}
          onDelete={this.handleDeleteTodo.bind(this)}
        />
      </div>
    )
  }
}

export default  DetailsTodoPage