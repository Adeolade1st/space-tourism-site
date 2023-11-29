import React from "react";
import spacePort from './image-spaceport-portrait.jpg';
import './spacesport.css';


export default function Spaceport(){
    return(
        <div className="Spaceport">
            
                
              <div className="container space-port">
                
                  <div className="row">
                    <p className="space-port"><span>03</span> SPACE LAUNCH 101</p>
                      <div className="col-sm-2"> <ul className="ul-list"><li className="link-list"><button className="btn btn primary spaceport">1</button></li>
                  <li className="link-list"><button className="btn btn primary spaceport">2</button></li>
                  <li className="link-list"><button className="btn btn primary spaceport">3</button></li>
                  </ul>
                  </div>
             <div className="col-sm-6"> <p className="terminology-spaceport">THE TERMINOLOGY...</p> <div className="vehicle-spaceport">SPACEPORT</div> 
                  <div className="term-desc-spaceport">A space capsule is an often-crewed spacecraft that uses a blunt-body 
                  reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight.
                   It includes a space gym, cinema, and plenty of other activities to keep you entertained.</div></div>
              <div className="col-sm-4"> <img src= {spacePort} alt="spaceport" className="spaceport-img" /> </div>


          </div>
          </div>
        </div>

    );
}