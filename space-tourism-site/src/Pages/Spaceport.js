import React from "react";
import spacePort from './image-spaceport-portrait.jpg';
import './spacesport.css';


export default function Spaceport(){
    return(
        <div className="spaceport">
            
                
              <div className="container space-port">
                
                  <div className="row">
                    <p className="space-port-launch"><span>03</span> SPACE LAUNCH 101</p>
                      <div className="col-sm-2"> <ul className="ul-list"><li><button className="btn btn primary port">1</button></li>
                  <li ><button className="btn btn primary port-2">2</button></li>
                  <li ><button className="btn btn primary port-3">3</button></li>
                  </ul>
                  </div>
             <div className="col-sm-5"> <p className="terminology-spaceport">THE TERMINOLOGY...</p> <div className="vehicle-spaceport">SPACEPORT</div> 
                  <div className="term-desc-spaceport">A spaceport or cosmodrome is a site for launching (or receiving)
                   spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the 
                   famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s 
                   rotation for launch.</div></div>
              <div className="col-sm-4"> <img src= {spacePort} alt="spaceport" className="spaceport-img" /> </div>


          </div>
          </div>
        </div>

    );
}