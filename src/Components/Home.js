import React, { Component } from 'react';
import '../Home.css';
// import { NavLink } from 'react-router-dom';
import mapSyd from '../mapSyd.jpg';
import t1 from '../t1.png';
import t4 from '../t4.png';
import home from '../home.png';
import underground from '../underground.png';
import station from '../station.jpg';
import station4 from '../station4.jpg';
// import {Col} from 'reactstrap';
// import {Image} from 'react-bootstrap';
import CountUp from 'react-countup';
import ToolTip from 'react-portal-tooltip';


class Home extends Component {
  
  constructor(){
    super();
    this.state = {
        apiKey: "f59334a288a05ba9057a4fda0c6f2cec",
        temp: 0,
        name: "",
        icon: "",
        iconDescription: "",
        isTooltipActive: false,
    }
  }

  showTooltip() {
    this.setState({isTooltipActive: true})
   }

  hideTooltip() {
    this.setState({isTooltipActive: false})
  }

    getWeather = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-33.867779&lon=151.208435&units=metric&appid=${this.state.apiKey}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({name: data.name, temp: data.main.temp, icon: data.weather[0].icon, iconDescribe: data.weather[0].icondescription});
      });
  }


  componentDidMount(){
   if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((position) => {
           this.getWeather(position.coords.latitude, position.coords.longitude);
       });
      }   
     } 
  
  
  render() {

    const onComplete = () => {
      console.log('Completed! ð');
    };
     
    const onStart = () => {
      console.log('Started! ð¨');
    };

    return (
      
     <div className="brick">
      <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={mapSyd} alt="Avatar" width="150%" height="295%"/>
        </div>

        <div className="flip-card-back">
          <div className="sydWeather">
            <h2 className="cityName">{this.state.name}</h2>
            <p className="cityDegrees">{Math.floor(this.state.temp)} °C</p>
            <img className="iconWeather" src = {`http://openweathermap.org/img/w/${this.state.icon}.png`} alt={this.state.iconDescribe} ></img>
          </div>
           <img className="house" src={home} />
           <CountUp className="display"  
                delay={2}
                start={4999940}
                end={5000000}
                duration={50}
                useEasing={true}
                separator=" "
                decimal=","
                // suffix= " inhabitants"
                onComplete={onComplete}
                onStart={onStart} 
              >  
            </CountUp>
            <img className="underground" src={underground} alt="subway"/>
            

             {/* <img className="train" src={train} alt="trainLines"/> */}
            
             
                <div id="text" ><a onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}><img className="t1" src={t1}/></a></div>
                <ToolTip active={this.state.isTooltipActive} position="bottom" arrow="left" parent="#text">
                    <div>
                        <p>The North Shore, Northern and Western Line </p>
                        <img className="station" src={station} alt="station" width="100%" margin="none" group="first"/>
                    </div>    
                </ToolTip>

                <ToolTip active={true} position="right" arrow="center">
                  <div id="text" ><a onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}><img className="t4" src={t4}/></a></div>
               </ToolTip>

                  {/* <div id="text" ><a onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}><img className="t4" src={t4}/></a></div>
                <ToolTip active={this.state.isTooltipActive} position="top" arrow="left" parent="#text">
                    <div>
                        <p>Eastern Suburbs and Illawarra Line </p>
                        <img className="station" src={station4} alt="station" width="100%" margin="none" group="second"/>
                        
                    </div>
                </ToolTip>
             */}

        </div>
      </div>
     </div>
    </div> 
    );
  }
}


export default Home;



// <Col className="lg-6 map1">
//       <NavLink  to="/aussie"><Image src={aussie} alt="map" responsive/></NavLink> 
//     </Col>
//     <Col className="lg-6 map2">
//       <NavLink to="/usa"><Image src={usa} alt="map" responsive/></NavLink> 
//     </Col>