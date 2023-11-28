import React from "react";
import mars from './image-mars.png';
import "./mars.css"
import hr from './hr-line.png';


export default function Mars(){
    return(

        <div className="mars">
            <div className="container hero">

            <div className="container">
                        <p className="head-mars"> <span className="num1">01</span> PICK YOUR DESTINATION</p>
                        <div className="row">
                            <div className="col-sm-7 mars-image"><img src={mars} alt="mars" className="mars"/></div>
                            <div className="col-sm-4 mars-links"> <span ><button className="btn">MOON</button></span> 
                             <span ><button className="btn">MARS</button></span> <span ><button className="btn ">EUROPA</button>
                             </span> <span ><button className="btn ">TITAN</button></span> </div>
                             <p className="mars-dest">MARS</p>
                             <div className="col-5">  <p className="see-mars">Don’t forget to pack your hiking boots. 
                             You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. 
                             It’s two and a half times the size of Everest!</p>

                             </div>
                            
                              <div className="row">
                                <div> < img src={hr} className="hr-body-mars" alt="horizontal-line"></img></div>
                                <div className="col-6 avg-mars">AVG. DISTANCE</div>
                                 <div className="col-6 est-mars">EST. TRAVEL TIME</div>
                                  <div className="col-6 km-mars">225 MIL. KM</div>
                                     <div className="col-6 days-mars">9 MONTHS</div>
                                  </div>
                            
                           
                        </div>
                 
                 </div>


        

            </div>

        </div>
    );
}
