import React from "react";
import "./App.css";
import desktopBackground from './background-home-desktop.jpg';


function App() {
  return (
    <div className="App">
      <img src= {desktopBackground} alt="desktop-background" className="desktopHome"></img>
      <div className="navBar">
        <span className="active"> <a href="#"> 00 HOME</a></span>
                      <span> <a href="#">01 DESTINATION</a> </span>
                        <span> <a href="#">02 CREW</a></span>
                          <span> <a href="#">03 TECHNOLOGY</a></span>
                          </div>
      <div className="container">
             <div className="row">
                  <div className="col-4">
                    <h1>SO, YOU WANT TO TRAVEL TO <div className="space">SPACE</div></h1>
                
                  </div>

                    <div className="col-8">
                    

                   </div>
           </div>
       </div>
    </div>
   
  );
}

export default App;
