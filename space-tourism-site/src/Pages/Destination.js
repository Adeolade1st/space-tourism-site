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
                             <div className="monn-heding text-center">MOON</div>
                        </div>

                    </div>










                </div>
           
             




















        </div>

       
    );
}