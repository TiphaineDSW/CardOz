import React, { Component } from 'react';
import '../Home.css';
import mapSyd from '../mapSyd.jpg';
import mansion from '../mansion.png';
import train from '../train.png';
import CountUp from 'react-countup';
import Aussie from './Aussie.js';

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

    return (
     <div> 
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#news" className="link">News</a>
        <a href="#contact" className="link">Contact</a>
        <a href="#about" className="link">About</a>
     </div>
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
            <img className="house" src={mansion} alt="home" />
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
           <img className="underground" src={train} alt="subway"/>
            <div id="colorNumber">
              <div className="TrainLines">
               <div className="tooltip"><img className="line" src={require('../one.png')} alt="line" />
                 <span className="tooltiptext">North and Western Line <img className="line" src={require('../station.jpg')} alt="line" /></span>
               </div>
               <div className="tooltip"><img className="line" src={require('../two.png')} alt="line" />
                 <span className="tooltiptext">Inner West and Leppington Line<img className="line" src={require('../station2.jpg')} alt="line" /></span>
               </div>
               <div className="tooltip"><img className="line" src={require('../three.png')} alt="line" />
                 <span className="tooltiptext">Bankstown Line<img className="line" src={require('../station3.jpg')} alt="line" /></span>
               </div>
              <div className="tooltip"><img className="line" src={require('../four.png')} alt="line" />
                 <span className="tooltiptext">Eastern Suburbs and Illawarra Line<img className="line" src={require('../station4.jpg')} alt="line" /></span>
              </div>
              <div className="tooltip"><img className="line" src={require('../airport.png')} alt="line" />
                 <span className="tooltiptext">Airport and South Line<img className="line" src={require('../station8.jpg')} alt="line" /></span>
              </div>
             </div>
            </div> 
           <Aussie></Aussie>
          </div>
         </div>
        </div>
       </div> 
      </div> 
    );
  }
}

export default Home;



