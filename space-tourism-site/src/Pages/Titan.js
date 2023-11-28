import React from "react";
import './titan.css';
import titan from './image-titan.png';
import hr from './hr-line.png';

export default function Titan (){
    return(

        <div className="Titan">

            <div className="container hero">

            <div className="container">
                        <p className="head-titan"> <span className="num-titan">01</span> PICK YOUR DESTINATION</p>
                        <div className="row">
                            <div className="col-sm-7 "><img src={titan} alt="titan" className="titan-image"/></div>
                            <div className="col-sm-4 titan-links"> <span ><button className="btn">MOON</button></span> 
                             <span ><button className="btn">MARS</button></span> <span ><button className="btn ">EUROPA</button>
                             </span> <span ><button className="btn ">TITAN</button></span> </div>
                             <p className="titan-dest">TITAN</p>
                             <div className="col-5">  <p className="see-titan">The only moon known to have a dense 
                             atmosphere other than Earth, Titan is a home away from home 
                             (just a few hundred degrees colder!). 
                             As a bonus, you get striking views of the Rings of Saturn..</p>

                             </div>
                            

                             </div>
                            
                              <div className="row">
                                <div> < img src={hr} className="hr-body-titan" alt="horizontal-line"></img></div>
                                <div className="col-6 avg-titan">AVG. DISTANCE</div>
                                 <div className="col-6 est-titan">EST. TRAVEL TIME</div>
                                  <div className="col-6 km-titan">1.6 BIL. KM</div>
                                     <div className="col-6 days-titan">3 YEARS</div>
                                  </div>
                            
                           
                        </div>
                 
                 </div>


        

            </div>
                           
                       


        

            

    );
}