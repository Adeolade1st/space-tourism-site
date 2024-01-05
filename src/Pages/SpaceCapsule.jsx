import React from "react";
import './styles/spacecapsle.css'
import capsule from './images/image-space-capsule-portrait.jpg';


export default function SpaceCapsule(){

    return(
        <div className="spaceCapsule">

              <div className="container space-capsule">
                
                  <div className="row">
                    <p className="space-capsule-launch"><span>03</span> SPACE LAUNCH 101</p>
                      <div className="col-sm-2"> <ul ><li ><button className="btn btn primary capsule-1 ">1</button></li>
                  <li ><button className="btn btn primary capsule-2">2</button></li>
                  <li ><button className="btn btn primary capsule-3">3</button></li>
                  </ul>
                  </div>
             <div className="col-sm-5"> <p className="terminology-capsule">THE TERMINOLOGY...</p> <div className="vehicle-capsule">SPACE CAPSULE</div> 
                  <div className="term-desc-capsule">A spaceport or cosmodrome is a site for launching (or receiving)
                   spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the 
                   famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s 
                   rotation for launch.</div></div>
              <div className="col-sm-4"> <img src= {capsule} alt="space-capsule" className="capsule-img" /> </div>


   
          </div>
        </div>


        </div>
    );
}