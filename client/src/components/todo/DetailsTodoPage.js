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

    this.handleUpdatedTodo = this.handleUpdatedTodo.bind(this)

    TodoStore.on(
      TodoStore.eventTypes.TODO_UPDATED,
      this.handleUpdatedTodo
    )
  }

  handleUpdatedTodo (data) {
    console.log("UPDATED")
    console.log(data)
    this.props.history.push('/')
  }

  handleDeletedTodo (){
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

    TodoStore.removeListener(
      TodoStore.eventTypes.TODO_UPDATED,
      this.handleUpdatedTodo
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

  handleUpdateTodo (event){
    event.preventDefault()

    TodoActions.update(this.state.todo)
  }

  render(){

    return(
      <div>
        <h1 className='text-center'>Details Todo Page</h1>
        <DetailsTodoForm
          todo={this.state.todo}
          onChange={this.handleInput.bind(this)}
          onDelete={this.handleDeleteTodo.bind(this)}
          onUpdate={this.handleUpdateTodo.bind(this)}
        />
      </div>
    )
  }
}

export default  DetailsTodoPage