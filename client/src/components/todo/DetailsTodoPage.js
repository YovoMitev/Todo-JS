import React, { Component } from 'react';
import TodoActions from '../../actions/TodoActions'
import TodoStore from '../../stores/TodoStore'

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

  }

  componentWillUnmount(){
     TodoStore.removeListener(
       TodoStore.eventTypes.DETAILS_RETRIEVED,
       this.handleRetrievedDetailsData
     )
  }

  componentDidMount(){
    TodoActions.details(this.id)
  }

  handleRetrievedDetailsData(data) {
     let todo = data.todo

     this.setState({todo})
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

      </div>
    )
  }
}

export default  DetailsTodoPage