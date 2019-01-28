import React, { Component } from 'react';
import './App.css'
import Home from './Components/Home';
import Aussie from './Components/Aussie';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
   <div>
     <BrowserRouter>
      <div>
       <Route path = "/" component={Home} exact/>
       <Route path = "/aussie" component={Aussie}/>
      </div>
     </BrowserRouter> 
    </div>
    );
  }
}

export default App;
