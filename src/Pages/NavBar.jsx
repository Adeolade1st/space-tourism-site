import React, {useState} from 'react'
import { Link  } from "react-router-dom";
import logo from './images/Path.png'
import './styles/navbar.css'

const NavBar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked)
    }

  return (
    <div className="navBar">
            <img src={logo} alt="logo" className='logo'/>
            <hr />
              <nav>
                <Link to="/" className="active">
                  <strong>00</strong> HOME
                </Link>
                <Link to="/Destination">
                  <strong>01</strong> DESTINATION
                </Link>
                <Link to="/Crew">
                  <strong>02</strong> CREW
                </Link>
                <Link to="/Technology">
                  <strong>03</strong> TECHNOLOGY
                </Link>
              </nav>
            <div id="mobile-view" onClick={handleClick}>
              <div
                id="times"
                className={clicked ? "fas fa-times" : "fas fa-bars"}
                >                
              </div>
            </div>
        </div>
  )
}

export default NavBar;
