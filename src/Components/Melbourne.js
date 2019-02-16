import React, { Component } from 'react';
import './melbourne.css';
import mel from './mel.png';
import cricket from '../cricket.png';
import market from '../market.png';


class Melbourne extends Component {
    constructor(){
        super();
        this.state={
          wheel: false
        }
      }
      
      handleClick = () =>{
        this.setState({wheel: !this.state.wheel});
      };
   
    render(){
        return (
            <div className="flip-card2">
                <div className="flip-card-inner2">    
                     <div className="flip-card-front2">
                       <img className="melCard" src={mel}  alt="melbourneCity"/>
                     </div>
                     <div className="flip-card-back2">
                       <div className="Criketpic">
                         <img src={cricket} alt="cricket"/>
                      </div>
                      <div className="market">
                         <img src={market} alt="market"/>
                      </div>
                     <div>
                     {/* <img src={wheel} classNameName={this.state.wheel ? "App-logo-speed-up" : "App-logo"} id="wheel" alt="wheel"></img> */}
                     <img src="https://i.goopics.net/n0klX.png" className={this.state.wheel ? "App-logo-speed-up" : "App-logo"} id="wheel"  alt="peg"></img>
                     </div>
                     <img src="http://www.blimpage.com/pants/wheel_of_lunch_peg.svg" id="peg" alt="peg"></img>
                     <div className="stage">
                      <div className="TramMel">
                       <div className="animation">
                        <div className="tram-top p-absolute">
                          <div className="tram-top-one bg-one p-absolute center-horizontal border"></div>
                          <div className="tram-top-two bg-one p-absolute center-horizontal border"></div>
                          <div className="tram-top-three bg-two p-absolute center-horizontal border">
                          <div className="tram-top-three-left bg-two p-absolute border"></div>
                          <div className="tram-top-three-right bg-two p-absolute border"></div>
                        </div>
                        <div className="tram-top-four bg-one p-absolute center-horizontal border"></div>
                        <div className="tram-top-five bg-one p-absolute border"></div>
                        <div className="tram-top-six bg-three p-absolute border"></div>   
                        </div>
                        <div className="tram-front p-absolute center-horizontal">
                          <div className="tram-front-one bg-three p-absolute border"></div>
                          <div className="tram-front-two bg-three p-absolute border">
                            <div className="tram-front-two-left bg-seven p-absolute border"></div>
                            <div className="tram-front-two-middle bg-seven p-absolute center-horizontal border"></div>
                            <div className="tram-front-two-right bg-seven p-absolute border"></div>
                          </div>
                          <div className="tram-front-three bg-four p-absolute border">
                           <div className="tram-front-three-middle p-absolute center-horizontal"></div>
                          </div>
                          <div className="tram-front-four bg-five p-absolute border">
                            <div className="tram-front-four-left p-absolute bg-four border"></div>
                            <div className="tram-front-four-right p-absolute bg-four border"></div>
                         </div>
                         <div className="tram-front-five bg-six p-absolute border"></div>
                      </div>
                      <div className="tram-left p-absolute">
                        <div className="tram-left-one bg-four p-absolute border"></div>
                        <div className="tram-left-two bg-three p-absolute border"></div>
                        <div className="tram-left-three bg-four p-absolute border"></div>
                      </div>
                      <div className="tram-right p-absolute">
                        <div className="tram-right-one bg-four p-absolute border"></div>
                        <div className="tram-right-two bg-three p-absolute border"></div>
                        <div className="tram-right-three bg-four p-absolute border"></div>
                      </div>
                       <div className="tram-bottom p-absolute center-horizontal">
                        <div className="tram-bottom-one bg-eight p-absolute center-horizontal"></div>
                        <div className="tram-bottom-two bg-eight p-absolute center-horizontal"></div>
                        <div className="tram-bottom-three bg-eight p-absolute center-horizontal"></div>   
                        <div className="tram-bottom-four p-absolute center-horizontal border"></div> 
                      </div>       
                     </div>
                     <div classNameName="tram-rail p-absolute center-horizontal">
                        <div className="tram-rail-left bg-nine p-absolute border"></div>
                        <div className="tram-rail-right bg-nine p-absolute border"></div>
                     </div>
                    </div>
                   </div>
                   <div className="buttonSpin">
                     <button onClick={this.handleClick}>Spin</button>
                   </div>
                   <div class="container">
                    <div class="body-penguin">
                        <div class="eye"></div>
                        <div class="nose"></div>
                        <div class="hand"></div>
                   <div class="foot"></div>
                 </div>
                </div>
               </div>
              </div>
            </div> 
          );
        }
      }




     export default Melbourne;