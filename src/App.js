import React, { Component } from 'react';
import './App.css'
import Home from './Components/Home';
import Melbourne from './Components/Melbourne';




class App extends Component {
  
  render() {
    return (
   <div>
     <Home></Home>
     <Melbourne></Melbourne>
    </div>
    );
  }
}

export default App;
