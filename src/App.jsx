import React from "react";
import "./App.css";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./Pages/NavBar";

function App() {
    return (
      <Router>
        <header>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Destination" element={<Destination />} />
            <Route path="/Crew" element={<Crew />} />
            <Route path="/Technology" element={<Technology />} />
          </Routes>
        </header>
      </Router>
    );
}

export default App;
