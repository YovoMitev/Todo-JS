import React, { Component } from 'react';

class HomePage extends Component {
  constructor (props){
    super (props)

    this.state = {
      todos:[]
    }
  }
  render(){
    return (
      <div>
        <h1>Welcome to Todos!</h1>
        <hr></hr>
        <ul>
        </ul>
      </div>
    )
  }

}

export default HomePage