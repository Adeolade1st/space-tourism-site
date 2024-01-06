import React, {useState} from 'react'
import { Link  } from "react-router-dom";
import logo from './images/Path.png'
import './styles/navbar.css'

const NAVIGATION = [
  {
    link: "/",
    title: "HOME"
  },{
    link: "/destination",
    title: "DESTINATION"
  },{
    link: "/crew",
    title: "CREW"
  },{
    link: "/technology",
    title: "TECHNOLOGY"
  },
]

const NavBar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked)
    }

  return (
    <>
      <div className="navBar">
            <img src={logo} alt="logo" className='logo'/>
            <hr />
              <nav>
                {
                  NAVIGATION.map((navigation, index) => (
                    <Link to={navigation.link} className="active">
                      <strong>0{index}</strong>
                      {navigation.title}
                    </Link>
                  ))
                }
              </nav>
        </div>
        <div id="mobile-view" onClick={handleClick}>
              <div className={clicked ? "fas fa-times" : "fas fa-bars"} >     
              </div>
        </div>
        {
          !clicked ?
          <div></div>
          :
          <div className='mobile-nav'>
              {
                NAVIGATION.map((navigation, index) => (
                  <Link to={navigation.link} className="active">
                    <strong>0{index}</strong>
                    {navigation.title}
                  </Link>
                ))
              }  
          </div>
        }
    </>
  )
}

export default NavBar;
