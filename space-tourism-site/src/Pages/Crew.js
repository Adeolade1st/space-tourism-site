import React from "react";
import './crew.css';
import doug from './doug.png';
import mark from './mark.png';
import bgs from './background-crew-desktop.jpg';
import bgs2 from './background-crew-desktop1.jpg';
import bgs3 from './background-crew-desktop2.jpg';
import bgs4 from './background-crew-desktop3.jpg';
import victor from './image-victor-glover.png';
import anouseh from './image-anousheh-ansari.png';



export default function Crew(){
    return(
        <div className="crew">
             <img src={bgs} alt="background" className="bg-image" />
              <img src={bgs2} alt="background" className="bgs2-image" />
               <img src={bgs3} alt="background" className="bgs3-image" />
                <img src={bgs4} alt="background" className="bgs4-image" />
               
                 
       
             <div className="container hero">

             <div className="container">
                
                <h1 className="doug-head">02 MEET YOUR CREW</h1>
                <div className="row">
                    <div className="col-sm-6"> 
                    <div className="commander-doug">Commander </div>
                    <div className="douglas">  Douglas Hurley  </div>
                    <p className="doug-about">is an American engineer, former Marine Corps pilot and former NASA astronaut.
                     He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                     </div>
                    <div className="col-sm-6"><img src={doug} alt="dougs" className="doug-image img-fluid"/></div>
                    
                </div>


             </div>

             <div className="container">
                
                <p className="head-mark">02 MEET YOUR CREW</p>
                <div className="row">
                    <div className="col-sm-6"> <p> <div className="specialist">MISSION SPECIALIST </div>
                     <div className="mark-shu">Mark Shuttleworth</div> <div className="mark-about">Mark Richard Shuttleworth is the founder and CEO of Canonical,
                     the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</div> 
                    </p></div>
                    <div className="col-sm-6"><img src={mark} alt="mark" className="mark-image img-fluid"/></div>
                    
                </div>


             </div>

             
             <div className="container">
                
                <p className="head-victor">02 MEET YOUR CREW</p>
                <div className="row">
                    <div className="col-sm-6"> <p> <div className="pilot">PILOT </div>
                    <div className="victor-glover">VICTOR GLOVER</div> <div className="victor-about">Pilot on the first operational 
                    flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. 
                    Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</div>
                   </p></div>
                    <div className="col-sm-6"><img src={victor} alt="victor-glover" className="victor-image img-fluid"/></div>
                    
                </div>


             </div>

                  
             <div className="container">
                
                <p className="head-anouseh">02 MEET YOUR CREW</p>
                <div className="row">
                    <div className="col-sm-6"> <p> <div className="engineer">Flight Engineer</div>
                    <div className="anuouseh-ansari">Anousheh Ansari </div> <div className="anouseh-about">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                    Ansari was the fourth self-funded space tourist, 
                    the first self-funded woman to fly to the ISS, and the first Iranian in space.</div>
                   </p></div>
                    <div className="col-sm-6"><img src={anouseh} alt="anouseh-ansari" className="anouseh-image img-fluid"/></div>
                    
                </div>


             </div>
            </div> 

        </div>
       
    );
}