import React from "react";
import "./styles/crew.css";
import DOUG from "./images/doug.png";
import MARK from "./images/mark.png";
import bgs from "./images/background-crew-desktop.jpg";
import VICTOR from "./images/image-victor-glover.png";
import ANOUSEH from "./images/image-anousheh-ansari.png";

const CrewMember = ({position, name, introduction, image, reverse}) => {
    return(
        <div className="crew-body">
          <main>
                <div className={reverse ? "crew-container-reverse" : "crew-container"}>
                    <div>
                        <h3 className="text-white">{position}</h3>
                        <h1 className="title">{name}</h1>
                        <p className="text">{introduction}</p>
                    </div>
                    <img src={image} alt="dougs" className="crew-image mb-4" />
                </div>
          </main>
        </div>

    )
}

export default function Crew() {
  return (
    <div className="crew-body">
        <img src={bgs} alt="background" className="background-image" />
        <p className="crew-head">
            <span className="num">02</span> MEET YOUR CREW
        </p>
        <CrewMember 
            position={"Commander"} 
            name={"Douglas Hurley"} 
            introduction={`An American engineer, former Marine Corps pilot and former
                        NASA astronaut. He launched into space for the third time as
                        commander of Crew Dragon Demo-2.`}
            image={DOUG}
            />
        <CrewMember 
            position={"Mission Specialist"} 
            name={"Mark Shuttleworth"} 
            introduction={`The founder and CEO of Canonical,
                            the company behind the Linux-based Ubuntu operating system.
                            Shuttleworth became the first South African to travel to space
                            as a space tourist.`}
            image={MARK}
            reverse={true}
        />        
        <CrewMember 
            position={"Pilot"} 
            name={"Victor Glover"} 
            introduction={`He is the first operational flight of the SpaceX Crew
                            Dragon to the International Space Station. Glover is a
                            commander in the U.S. Navy where he pilots an F/A-18.He was a
                            crew member of Expedition 64, and served as a station systems
                            flight engineer.`}
            image={VICTOR}
        />        
        <CrewMember 
            position={"Flight Engineer"} 
            name={"Anousheh Ansari"} 
            introduction={`An Iranian American engineer and co-founder
                            of Prodea Systems. Ansari was the fourth self-funded space
                            tourist, the first self-funded woman to fly to the ISS, and
                            the first Iranian in space.`}
            image={ANOUSEH}
            reverse={true}
        />   
    </div>
  );
}
