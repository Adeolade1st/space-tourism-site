import React, { useState } from "react";
import "./styles/destination.css";
import bgDestination from "./images/background-destination-desktop.jpg";
import { Link } from "react-router-dom";
import { DESTINATIONS } from "./Export";

const Destination = () => {

    const [active, setActive] = useState("moon");

    function InnerNavBar({ id }) {

        const handleClick = (id) => () => {
            setActive(id);
        };
        return (
            <div className="other-destinations">
                <span>
                    <Link 
                        to="#moon" 
                        id={ id === "moon" ? "active" : "moon"} 
                        onClick={handleClick("moon")}>MOON</Link>
                </span>
                <span>
                    <Link 
                        to="#mars" 
                        id={ id === "mars" ? "active" : "mars"} 
                        onClick={handleClick("mars")}> MARS</Link>
                </span>
                <span>
                    <Link
                        to="#europa" 
                        id={ id === "europa" ? "active" : "europa"} 
                        onClick={handleClick("europa")}>EUROPA</Link>
                </span>
                <span>
                    <Link 
                        to="#titan" 
                        id={ id === "titan" ? "active" : "titan"} 
                        onClick={handleClick("titan")}>TITAN</Link>
                </span>
            </div>
        )
    }

  return (
    <div className="destination-body">
      <img src={bgDestination} alt="background" className="destination-background-image" />
      <main>
      <p className="destination-head">
        <span className="num">01</span> PICK YOUR DESTINATION
      </p>
      {
        DESTINATIONS.map((item, index) => (
            active === item.id ?
            <div key={index} className="destination-container">
            <img src={item.image} alt={item.title} className="destination-image" />
            <div >
                <InnerNavBar id={item.id}/>        
            <div className="">
            <h1 className="title">{item.title}</h1>
            {" "}
            <p className="text">{item.text}</p>
            </div>
            <hr />
            <div className="information">
                <div>
                    <h1>AVG. DISTANCE</h1>
                    <h3>{item.distance} KM</h3>
                </div>
                <div>
                    <h1>EST. TRAVEL TIME</h1>
                    <h3>{item.timeToTravel} DAYS</h3>
                </div>
                </div>
            </div>
            </div>
            : <div key={index}></div>
           
        ))
        }
      </main>
    </div>
  );
};

export default Destination;