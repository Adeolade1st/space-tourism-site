import React from "react";
import mainLogo from './Path.png';
import horizontal from './Rectangle.png';
import bgDestination from './background-destination-desktop.jpg';
import moon from './image-moon.png';
import "./destination.css";




export default function Destination(){
    return(
       

        <div className="destination">
           

             <img src={bgDestination} alt="background" className="bg-image" />
             <img src={bgDestination} alt="background" className="bg-image" />
             <img src={bgDestination} alt="background" className="bg-image" />
             <img src={bgDestination} alt="background" className="bg-image" />
              <span> <img src={mainLogo} className="logo-head" alt="logo"></img></span>
                <span> <img src={horizontal} className="horizontal-head" alt="horizontal-line"></img></span>

                <div className="container main">
                    <div className="container">
                        <p className="moon-head">01 PICK YOUR DESTINATION</p>
                        <div className="row">
                            <div className="col-sm-8"><img src={moon} alt="moon" className="moon"/></div>
                            <div className="col-sm-4"> <span ><button className="btn">MOON</button></span> 
                             <span ><button className="btn">MARS</button></span> <span ><button className="btn ">EUROPA</button>
                             </span> <span ><button className="btn ">TITAN</button></span> </div>
                             <p className="mon-dest">MOON</p>
                             <div className="col">  <p className="see">See our planet as you’ve never seen it before. A perfect relaxing trip 
                                away to help regain perspective and come back refreshed. 
                                While you’re there, take in some history by visiting the 
                                Luna 2 and Apollo 11 landing sites.</p>

                                 
                               
                             </div>
                              <div> <img src={horizontal} className="horizontal-body" alt="horizontal-line"></img></div>
                              
                              <div className="row">
                              
                                <div className="col-6">AVG. DISTANCE</div>
                                 <div className="col-6">Est. travel time</div>
                                 <div className="col-6">384,400 km</div>
                                 <div className="col-6">3 days</div>
                                    </div>
                             
                                
                           
                           
                        </div>

                    </div>










                </div>
           
             




















        </div>

       
    );
}