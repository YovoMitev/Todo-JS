import React, { Component } from 'react';
import './App.css';
import Routes from './components/common/Routes'
import NavBar from './components/common/NavBar'

class App extends Component {
  render() {
    return (
        <div className='wrapper'>
            <NavBar/>
            <div className="container">
                <Routes/>
            </div>
        </div>
            
    );
  }
}

export default App;
