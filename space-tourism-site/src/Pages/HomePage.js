import React from "react";
import desktopBackground from './background-home-desktop.jpg';
import mainLogo from './Path.png';
import horizontal from './Rectangle.png';
import './homepage.css';



export default function HomePage(){
    return(

        <div>
            <img src= {desktopBackground} alt="desktop-background" className="desktopHome" ></img>
                            <span> <img src={mainLogo} className="logo-top" alt="logo"></img></span>
                            <span> <img src={horizontal} className="horizontal-line" alt="horizontal-line"></img></span>

    <div className="container">
        <div className="container hero"> 
          
                  
                    <p className="travel">SO, YOU WANT TO TRAVEL TO  </p> 
                    <h1 className="space-on">SPACE</h1>

           <div className="row">
            <div className="col-sm-5">
              <p className="faceit-now ">
                         
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer 
                            space and not hover kind of on the edge of it.
                            Well sit back, and relax because we’ll give you a truly out 
                            of this world experience! Explore.
                        
              </p>
              
            </div>
            <div className="col-sm-7">
                      <button className="btn rounded-circle in"><div className="explore-more">EXPLORE</div> </button>

                   </div>

           </div>

        </div>
       </div>
        </div>

        

        

     
    );
}