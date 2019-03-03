import React, { Component } from 'react';
import '../css/Home.css';
import CoverOz from '../images/CoverOz.png';
import parchemin2 from '../images/parchemin2.png';
import pushpin from '../images/push-pin.png';
import right from '../images/right.png';

class Home extends Component{

    render(){ 
     return(
        <div className="background">
        <div>
        <img className="back" src= {parchemin2} alt="imageHome" ></img>
        </div>
         <div>
         <img className="HomeImage" src= {CoverOz} alt="imageHome" ></img>
         <img className="pushpin" src= {pushpin} alt="pin" ></img>
         <a href="/cards"><img className="arrow"src={right} alt="arrow"/></a>
         </div>
        </div> 
     )  
   }
 }

export default Home;