import React, { Component } from 'react';
import '../css/Home.css';
import Aussie from './Aussie.js';
import mapSyd from '../images/mapSyd.jpg';
import mansion from '../images/mansion.png';
import train from '../images/train.png';
import CountUp from 'react-countup';
import one from '../images/one.png';
import station from '../images/station.jpg';


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
               <div className="info"><img className="line" src={one} alt="line" />
                 <span className="bubble">North and Western Line <img className="line" src={station} alt="line" /></span>
               </div>
               <div className="info"><img className="line" src={require('../images/two.png')} alt="line" />
                 <span className="bubble">Inner West and Leppington Line<img className="line" src={require('../images/station2.jpg')} alt="line" /></span>
               </div>
               <div className="info"><img className="line" src={require('../images/three.png')} alt="line" />
                 <span className="bubble">Bankstown Line<img className="line" src={require('../images/station3.jpg')} alt="line" /></span>
               </div>
              <div className="info"><img className="line" src={require('../images/four.png')} alt="line" />
                 <span className="bubble">Eastern Suburbs and Illawarra Line<img className="line" src={require('../images/station4.jpg')} alt="line" /></span>
              </div>
              <div className="info"><img className="line" src={require('../images/airport.png')} alt="line" />
                 <span className="bubble">Airport and South Line<img className="line" src={require('../images/station8.jpg')} alt="line" /></span>
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



