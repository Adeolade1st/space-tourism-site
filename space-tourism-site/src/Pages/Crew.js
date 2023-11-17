import React from "react";
import mainLogo from './Path.png';
import horizontal from './Rectangle.png';
import './crew.css';
import doug from './doug.png';
import mark from './mark.png';
import bgs from './background-crew-desktop.jpg';
import bgs2 from './background-crew-desktop1.jpg';
import bgs3 from './background-crew-desktop2.jpg';
import victor from './image-victor-glover.png';


export default function Crew(){
    return(
        <div className="crew">
             <img src={bgs} alt="background" className="bg-image" />
              <img src={bgs2} alt="background" className="bgs2-image" />
               <img src={bgs3} alt="background" className="bgs3-image" />
       
                <span> <img src={mainLogo} className="logo-head" alt="logo"></img></span>
                <span> <img src={horizontal} className="horizontal-head" alt="horizontal-line"></img></span>
             
               
               
                
             
             <div className="container hero">

             <div className="container">
                
                <h1 className="crew-head">02 MEET YOUR CREW</h1>
                <div className="row">
                    <div className="col-sm-6"> <p className="bio"> <div className="commander">Commander </div> <div className="douglas">Douglas Hurley</div> 
                    <div className="doug-about">Douglas Gerald Hurley 
                    is an American engineer, former Marine Corps pilot and former NASA astronaut.
                     He launched into space for the third time as commander of Crew Dragon Demo-2.</div> </p></div>
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
            </div> 

        </div>
       
    );
}