import React from "react";
import desktopBackground from './images/background-home-desktop.jpg';
import mobileBackground from './images/background-home-mobile.jpg';
import tabletBackground from './images/background-home-tablet.jpg';
import './styles/homepage.css';
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="homepage">
            <img src={desktopBackground} alt="desktop-background" className="desktopHome"  />
            <img src={mobileBackground} alt="mobile-background" className="mobileHome" />
            <img src={tabletBackground} alt="tablet-background" className="tabletHome" />
            <div>
                <p className="travel">SO, YOU WANT TO TRAVEL TO  </p>
                <div className="innerContainer">
                    <div className="space">
                        <h1 className="space-on">SPACE</h1>
                        <p className="faceit-now">
                            Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it.
                            Well sit back, and relax because we’ll give you a truly out of this world experience!

                        </p>
                    </div>
                    <Link to="/destination">
                        <button className="explore" >Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );

}
