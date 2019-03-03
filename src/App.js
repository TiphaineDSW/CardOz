import React, { Component } from 'react';
import './css/App.css'
import Melbourne from './Components/Melbourne';
import Sydney from './Components/Sydney';
import Home from './Components/Home';
import { BrowserRouter, Route } from 'react-router-dom';




class App extends Component {
  
  render() {
    return (
    <BrowserRouter>
     <div>
        <Route exact path ="/" component={Home}/>
        <Route path = "/cards" component={Sydney}/>
        <Route path = "/cards" component={Melbourne}/>
     </div>  
    </BrowserRouter>
    );
  }
}

export default App;
