import React, { Component } from 'react';
import './css/App.css'
import Home from './Components/Home';
import Melbourne from './Components/Melbourne';
// import CoverOZ from './Components/CardOz';




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
