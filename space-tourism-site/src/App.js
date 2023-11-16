import React from "react";
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import "./App.css";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import HomePage from "./Pages/HomePage";


function App() {
  return (
   
    <Router >
                    <nav className="navBar">
                          <Link to="/"> <strong>00 </strong>HOME</Link>
                          <Link to="/Destination"> <strong>01 </strong> DESTINATION</Link>
                          <Link to="/Crew"> <strong>02 </strong> CREW</Link>
                          <Link to="/Technology"> <strong>03 </strong> TECHNOLOGY</Link>
                        </nav>


                           <Routes>
                           
                            <Route path='/' element={<HomePage />}/>
                              <Route path='/DESTINATION' element={<Destination />}/>
                             <Route path='CREW' element={<Crew/>}/>
                               <Route path='/TECHNOLOGY' element={<Technology />}/>
                          
                            </Routes>
                       

                        

   </Router>
   
   
  );
}

export default App;