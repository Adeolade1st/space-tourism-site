import React from "react";
import desktopBackground from './images/background-home-desktop.jpg';
import mobileBackground from './images/background-home-mobile.jpg';

import tabletBackground from './images/background-home-tablet.jpg';
import './styles/homepage.css';







export default function HomePage(){


 


    return(


        <div className="homepage">
            <img src= {desktopBackground} alt="desktop-background" className= "desktopHome img-fluid max-width: 100% height:100%"  ></img>
             <img src= {mobileBackground} alt="mobile-background" className= "mobileHome img-fluid max-width: 100% height:auto " ></img>
                <img src= {tabletBackground} alt="tablet-background" className= "tabletHome img-fluid max-width: 100% height:auto " ></img>                           
         
         
    <div className="container">
     
        <div className="container hero"> 
           <p className="travel">SO, YOU WANT TO TRAVEL TO  </p>
           <div className="row">
            <div className="col-sm-5">
             <h1 className="space-on">SPACE</h1>
              <p className="faceit-now">
                           Let’s face it; if you want to go to space, you might as well genuinely go to 
                           outer space and not hover kind of on the edge of it. 
                           Well sit back, and relax because we’ll give you a truly out of this world experience!
                        
              </p>
              
            </div>
            <div className="col-sm-7">
                      <button className="btn btn rounded-circle in"><div className="explore-more">EXPLORE</div> </button>
                      <button className="btn btn rounded">EXPLORE</button>
                   </div>

           </div>

        </div>
       </div>
        </div>

        

        
       
     
    );
 
}
