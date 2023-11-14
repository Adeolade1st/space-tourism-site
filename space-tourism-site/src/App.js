import React from "react";
import "./App.css";
import desktopBackground from './background-home-desktop.jpg';
import mainLogo from './Path.png';
import horizontal from './Rectangle.png';


function App() {
  return (
    <div className="App">
      
                        <img src= {desktopBackground} alt="desktop-background" className="desktopHome"></img>
                            <span> <img src={mainLogo} className="logo"></img></span>
                            <span> <img src={horizontal} className="horizontal"></img></span>
                            
                           
                        <div className="navBar">
                           
                            <span className="active"> <a href="#"> 00 HOME</a></span>
                            <span> <a href="#">01 DESTINATION</a> </span>
                            <span> <a href="#">02 CREW</a></span>
                            <span> <a href="#">03 TECHNOLOGY</a></span>
                        </div>

                        

      <div className="container">
        <div className="container hero"> 
             <div className="row">
                  <div className="col-sm-4">
                    <h1>SO, YOU WANT TO TRAVEL TO <div className="space">SPACE</div> </h1>

                     
                  </div>

                    <div className="col-sm-8">
                      <button className="btn rounded-circle"><div className="explore">EXPLORE</div> </button>

                   </div>
           </div>

           <div className="row">
            <div className="col-sm-4">
              <p className="faceit ">
                         
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer 
                            space and not hover kind of on the edge of it.
                            Well sit back, and relax because we’ll give you a truly out 
                            of this world experience! Explore
                        
              </p>
              
            </div>
            <div className="col-sm-8"></div>

           </div>

        </div>
       </div>
    </div>
   
  );
}

export default App;
