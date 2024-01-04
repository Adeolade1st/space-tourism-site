import React from "react";
import "./App.css";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import HomePage from "./Pages/HomePage";
import mainLogo from './Path.png';
import horizontal from './Rectangle.png';  
import {BrowserRouter as Router,Routes,Route, Link, BrowserRouter} from "react-router-dom"; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        


function App() {
  
  return (    
    <BrowserRouter>
        
      <nav >
        <div className="logo"><img src={mainLogo}  alt="logo"></img></div>
        <div className="horizonal-line"><img src={horizontal}  alt="horizontal-line"></img></div>
          <Link to='/' className="active"><strong>00</strong> HOME</Link>
           <Link to='/Destination'><strong>01</strong> DESTINATION</Link>
            <Link to='/Crew'><strong>02</strong> CREW</Link>
             <Link to='/Technology'><strong>03</strong> TECHNOLOGY</Link>
            
             <div id="mobile-view" className="fas fa-bars"></div>
             <div id="times"className="fas fa-times"></div>

     </nav>

     <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
            <Route path="/Technology" element={<Technology />} />
     </Routes>

    
   </BrowserRouter>
   
  );
  
}

export default App;