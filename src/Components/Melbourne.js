import React, { Component } from 'react';
import '../css/melbourne.css';
import mel from '../images/mel.png';
import cricket from '../images/cricket.png';
import market from '../images/market.png';
import wheel from '../images/wheel.png';
import penguin from '../images/penguin.png';
import hand from '../images/hands.png';

class Melbourne extends Component {
    constructor(){
        super();
        this.state={
          wheel: false,
          modal: false
        }
        this.toggle = this.toggle.bind(this);
      }
      
      handleClick = () =>{
        this.setState({wheel: !this.state.wheel});
      };

    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
   
    render(){
       return (
        <div className="flip-card2">
          <div className="flip-card-inner2">    
             <div className="flip-card-front2">
                <img className="melCard" src={mel} alt="melbourneCity"/>
            </div>
            <div className="flip-card-back2">
               <h3 className="titlefood">Food of Fortune</h3>
               <img src={wheel} className={this.state.wheel ? "App-logo-speed-up" : "App-logo"} id="wheel"  alt="wheel"></img>
               <img className="peg" src="http://www.blimpage.com/pants/wheel_of_lunch_peg.svg"  alt="peg"></img>
            <div className="buttonSpin">
             <button className="spin" onClick={this.handleClick}>Spin</button>
           </div>
           <h3 className="toDo">Events</h3>
         </div> 
         <div className="Events">
              <img src={cricket} alt="cricket"></img>
              <img src={penguin} alt="penguin"></img>
              <img src={market} alt="market"></img>
              <img src={hand} alt="hand"></img>
         </div>  
       </div>
     </div> 
   );
  }
 } 



export default Melbourne;