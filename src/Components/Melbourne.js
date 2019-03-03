import React, { Component } from 'react';
import '../css/melbourne.css';
import mel from '../images/mel.png';
import cricket from '../images/cricket.png';
import market from '../images/market.png';
import wheel from '../images/wheel.png';
import penguin from '../images/penguin.png';
import tramway from '../images/tramway.png';
import burger from '../images/burger.png';
import grill from '../images/grill.png';
import hand from '../images/hands.png';
import shrine from '../images/shrine remembrance.png';

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
               <img src={wheel} className={this.state.wheel ? "App-logo-speed-up" : "App-logo"} id="wheel"  alt="peg"></img>
               <img src="http://www.blimpage.com/pants/wheel_of_lunch_peg.svg" id="peg" alt="peg"></img>
            <div>
               <img className="tramway" src={tramway} alt="tramway"></img> 
            </div> 
            <div className="buttonSpin">
             <button onClick={this.handleClick}>Spin</button>
           </div>   
           <div>
           <boutton onClick={this.datatoggle}><img src={cricket} className="Cricketpic" alt="cricket"></img></boutton>
           {/* <p>
            The Melbourne Cricket Ground (MCG), also known simply as "The G",[4] is an Australian sports stadium located in Yarra Park, Melbourne, Victoria. 
            Home to the Melbourne Cricket Club, it is the 10th largest stadium in the world, the largest in Australia, the largest in the Southern Hemisphere, 
            the largest cricket ground by capacity, and has the tallest light towers of any sporting venue. 
            The MCG is within walking distance of the city centre and is served by Richmond and Jolimont stations, 
            as well as the route 70 tram and the route 246 bus. It is part of the Melbourne Sports and Entertainment Precinct.
          </p> */}
        </div>
        <div>
          <boutton onClick={this.datatoggle}><img src={grill} className="Barbecue" alt="grill"></img></boutton>
          {/* <p>
              Barbecue varies by the type of meat, sauce, rub, or other flavorings used, 
              the point in barbecuing at which they are added, the role smoke plays, the equipment and fuel used, cooking temperature, and cooking time.
              The meat may be ground, for hamburgers, or processed into sausage or kebabs. 
              The meat may be marinated or rubbed with spices before cooking, basted with a sauce or oil before, during or after cooking, or any combination of these.
           </p> */}
        </div>
        <div>
          <boutton onClick={this.datatoggle}><img src={burger} className="Food" alt="burger"></img></boutton>
        {/* <p>
                A typical Aussie barbecue comes with sausages, burgers, steak, fresh seafood, 
                bread and tomato or barbecue sauce, 
                they sometimes include salad but it's mainly about the meat and fish 
                (and of course a few stubbies – that's beer to the non-Australians).
        </p> */}
        </div>
        <div>
          <boutton onClick={this.datatoggle}><img src={hand} className="Culture" alt="hand"></img></boutton>
        {/* <p>
              Melbourne is Australia's second largest city and has a diverse and multicultural population
              Almost a quarter of Victoria's population 
              was born overseas, and the city is home to residents from 200 countries and territories, 
             who speak over 233 languages and dialects and follow 116 religious faiths.
        </p> */}
        </div>   
        <div >
        <boutton onClick={this.datatoggle}><img src={shrine} className="Shrine" alt="img-monument"></img></boutton>
        {/* <p>
        The Shrine of Remembrance (commonly known among locals as The Shrine) is a war memorial in Melbourne, Victoria, Australia, located in Kings Domain on St Kilda Road. 
        It was built to honour the men and women of Victoria who served in World War I, 
        but is now a memorial to all Australians who have served in war. 
        It is a site of annual observances of ANZAC Day (25 April) and Remembrance Day (11 November) and is one of the largest war memorials in Australia.
        </p> */}
        </div>
        <div  alt="image-penguin">
          <img className="Penguinpic" src={penguin} alt="penguin"/>
         {/* <p>
        In South Australia, many little penguin colony declines have been identified across the state. 
        In some cases, colonies have declined to extinction (including the Neptune Islands, West Island, Wright Island, 
        Pullen Island and several colonies on western Kangaroo Island), while others have declined from thousands of animals to few 
        (Granite Island and Kingscote). 
        A report released in 2011 presented evidence supporting the listing of the statewide population or the more closely monitored sub-population from St. 
        Vincent's Gulf as Vulnerable under South Australia's National Parks and Wildlife Act 1972. As of 2014, the little penguin is not listed as a species of conservation concern,
        despite ongoing declines at many colonies.
        </p> */}
      </div>
      <div>
         <img  className="market" src={market} alt="market"/>
           {/* <p>
            Melbourne Market, more formally the Melbourne Wholesale Fruit and Vegetable Markets, 
            is the main wholesale produce market for Melbourne, Australia, and the wider state of Victoria. 
            Located in the outer northern suburb of Epping and operated by the Melbourne Market Authority, 
            the Market provides for the wholesale distribution of fruit, vegetables and flowers to the Melbourne region daily.
          </p>  */}
      </div> 
     </div> 
    </div>
   </div> 
   );
  }
 } 



export default Melbourne;