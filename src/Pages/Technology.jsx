import React from "react";
import techBackground from "./images/background-technology-desktop.jpg";
import launchVehicle from "./images/image-launch-vehicle-portrait.jpg";
import spacePort from './images/image-spaceport-portrait.jpg';
import capsule from './images/image-space-capsule-portrait.jpg';
import "./styles/technology.css";

const TechnologyTemplate = ({position, name, lecture, image, reverse}) => {
  return(
      <div className="technology-body">
        <main>
            <div className={reverse ? "technology-container-reverse" : "technology-container"}>
              <div>
                  <h3 className="top-text">THE TERMINOLOGY...</h3>
                  <h1 className="title">{name}</h1>
                  <p className="text">{lecture}</p>
              </div>
              <img src={image} alt={name}  className="technology-image mb-4" />
              </div>
        </main>
      </div>

  )
}
export default function Technology() {
  return (
    <div className="Terminology">
      <img src={techBackground} alt="background" className="technology-background-image" />
        <p className="technology-head">
          <span className="num">03</span> SPACE LAUNCH 101
        </p>
        <TechnologyTemplate 
          name={"LAUNCH VEHICLE"}
          lecture={`A launch vehicle or carrier rocket is a rocket-propelled vehicle
                    used to carry a payload from Earth's surface to space, usually
                    to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                    powerful in operation. Standing 150 metres tall, it's quite an
                    awe-inspiring sight on the launch pad!`}  
          image={launchVehicle}
        />
        <TechnologyTemplate 
          name={"SPACEPORT"}
          lecture={`A spaceport or cosmodrome is a site for launching (or receiving)
                    spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the 
                    famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s 
                    rotation for launch.`}  
          image={spacePort}
          reverse
        />
        <TechnologyTemplate 
          name={"SPACE CAPSULE"}
          lecture={`A spaceport or cosmodrome is a site for launching (or receiving)
                    spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the 
                    famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s 
                    rotation for launch.`}  
          image={capsule}
        />
    </div>
  );
}
