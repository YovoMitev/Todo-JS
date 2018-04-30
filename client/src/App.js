import React, { Component } from 'react';
import './App.css';
import Routes from './components/common/Routes'
import NavBar from './components/common/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
