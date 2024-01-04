import React from "react";
import techBackground from './background-technology-desktop.jpg';
import launchVehicle from './image-launch-vehicle-portrait.jpg';
import Spaceport from "./Spaceport";
import SpaceCapsule from "./SpaceCapsule";

import './technology.css';


export default function Technology(){
    return(

      <div className="Terminology">

        <img src= {techBackground} alt="background" />
          <img src= {techBackground} alt="background" />
          <img src= {techBackground} alt="background" />
        
      
  

         <div className="container hero">
          <div className="container">
            <div className="row">
              <p className="space-launch"><span>03</span> SPACE LAUNCH 101</p>
            <div className="col-sm-2"> <ul><li className="list-1"><button className="btn btn primary one">1</button></li>
                <li list-1><button className="btn btn primary two">2</button></li>
                  <li list-1><button className="btn btn primary three">3</button></li>
                  </ul>
                  </div>
             <div className="col-sm-5"> <p className="terminology">THE TERMINOLOGY...</p> <div className="vehicle">LAUNCH VEHICLE</div> 
             <div className="term-desc">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload
               from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the
               most powerful in operation. Standing 150 metres tall, 
              it's quite an awe-inspiring sight on the launch pad!</div></div>
              <div className="col-sm-4"> <img src= {launchVehicle} alt="launch-vehice" className="launch-vehicle" /> </div>


          </div>
          </div>
          <Spaceport />
          <SpaceCapsule />


         </div>



      </div>

       
       
    );
}