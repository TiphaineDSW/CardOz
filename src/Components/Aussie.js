import React, { Component } from 'react';
import '../Aussie.css';
// import home from '../home.svg';
import {Header} from 'react-fullpage';
import {Container} from 'reactstrap';
import {Image} from 'react-bootstrap';
import CountUp from 'react-countup';


class Aussie extends Component {

  constructor(){
    super();
    this.state = {
        apiKey: "f59334a288a05ba9057a4fda0c6f2cec",
        temp: 0,
        name: "",
        icon: "",
        iconDescription: "",
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
   if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((position) => {
           this.getWeather(position.coords.latitude, position.coords.longitude);
       });
      }   
     } 

     

  render() {
    // let options = {
    //   sectionClassName:     'section',
    //   anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
    //   scrollBar:            false,
    //   navigation:           true,
    //   verticalAlign:        false,
    //   sectionPaddingTop:    '0px',
    //   sectionPaddingBottom: '0px',
    //   arrowNavigation:      true,
    //   activeClass:          'active',
    //   delay:                700,
    // };
    
    const onComplete = () => {
      console.log('Completed! ð');
    };
     
    const onStart = () => {
      console.log('Started! ð¨');
    };

    

    return (
    <div className="back">
      <Header className="back">
       {/* <a href="/"><Image className="house" src={home} alt="map" responsive/></a> */}
      </Header>
      <Container className="colorBlock">
          <div className="sydWeather">
            <h2 className="cityName">{this.state.name}</h2>
            <p className="cityDegrees">{Math.floor(this.state.temp)} °C</p>
            <img className="iconWeather" src = {`http://openweathermap.org/img/w/${this.state.icon}.png`} alt={this.state.iconDescribe} ></img>
            <CountUp className="display"  
                delay={2}
                start={4999940}
                end={5000000}
                duration={50}
                useEasing={true}
                separator=" "
                decimal=","
                suffix= " inhabitants"
                onComplete={onComplete}
                onStart={onStart} 
              >  
            </CountUp>
           </div>
        
      </Container>  
     </div>       
     );
    } 
   }

export default Aussie;


// {
//   "id": 6619279,
//   "name": "City of Sydney",
//   "country": "AU",
//   "coord": {
//     "lon": 151.208435,
//     "lat": -33.867779
//   }