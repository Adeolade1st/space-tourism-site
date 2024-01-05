import React from "react";
import europa from './images/image-europa.png';
import hr from './images/hr-line.png';
import './styles/europa.css';


export default function Europa(){
    return(

        <div className="europa">
            <div className="container hero">

            <div className="container">
                        <p className="head-europa"> <span className="num-europa">01</span> PICK YOUR DESTINATION</p>
                        <div className="row">
                            <div className="col-sm-7 "><img src={europa} alt="europa" className="europa-image"/></div>
                            <div className="col-sm-4 europa-links"> <span ><button className="btn">MOON</button></span> 
                             <span ><button className="btn">MARS</button></span> <span ><button className="btn ">EUROPA</button>
                             </span> <span ><button className="btn ">TITAN</button></span> </div>
                             <p className="europa-dest">EUROPA</p>
                             <div className="col-5">  <p className="see-europa">The smallest of the four Galilean moons orbiting Jupiter, 
                             Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, 
                             curling, hockey, or simple relaxation in your snug wintery cabin.</p>

                             </div>
                            
                              <div className="row">
                                <div> < img src={hr} className="hr-body-europa" alt="horizontal-line"></img></div>
                                <div className="col-6 avg-europa">AVG. DISTANCE</div>
                                 <div className="col-6 est-europa">EST. TRAVEL TIME</div>
                                  <div className="col-6 km-europa">628 MIL. KM</div>
                                     <div className="col-6 days-europa">3 YEARS</div>
                                  </div>
                            
                           
                        </div>
                 
                 </div>


        

            </div>

        </div>
    );
}
