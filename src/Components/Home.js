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
import {Col, Row} from 'reactstrap';
// import {Image} from 'react-bootstrap';
import CountUp from 'react-countup';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


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


    getWeather = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-33.867779&lon=151.208435&units=metric&appid=${this.state.apiKey}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({name: data.name, temp: data.main.temp, icon: data.weather[0].icon, iconDescribe: data.weather[0].icondescription});
      });
  }


  componentDidMount(){
    this.getWeather()
  } 

  
  render() {

    const onComplete = () => {
      console.log('Completed! ð');
    };
     
    const onStart = () => {
      console.log('Started! ð¨');
    };

    // let style:
    //   margin: '150px auto 0 auto',transform: 'translateY(-50%)'
   
    // let margin:
    //   margin: '40px'
   

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


           {/* <TooltipComponent  content='Tooltip from hover' opensOn='Hover' target='#hoverButton'>
                 <ButtonComponent style={margin} id='hoverButton' className="blocks">Hover Me !(Default)</ButtonComponent>
           </TooltipComponent> */}
        
         

             

                

        </div>
      </div>
     </div>
    </div> 
    );
  }
}


export default Home;



