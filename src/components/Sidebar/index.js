import './index.scss'
import * as React from 'react';
import LogoS from '../../assets/Images/pavansnap2-removebg-preview.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
    faLinkedin,
    faGithub,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faMortarBoard,
    faBriefcase,
    faBars,
    faClose
  } from '@fortawesome/free-solid-svg-icons'
  import { useState } from 'react';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return(
    <div className='navbar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <p className='logoName'>Pavan</p>
        </Link>
        <nav className={showNav ? 'mobile-show':""}>
          <div className='displayFlex'>
            <NavLink exact="true" activeclassname="active" className="home-link LINK" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link LINK" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link LINK" to="/skills">
                <FontAwesomeIcon icon={faMortarBoard} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link LINK" to="/projects">
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link LINK" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} 
                color="#4d4d4e" />
            </NavLink>
            </div>
            <FontAwesomeIcon icon={faClose}
            onClick={() => setShowNav(false)}
            color="#ffd700"
            size='3x'
            className='close-icon'
            />
        </nav> 

        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vinjamara-pavan-kumar323/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pavanvinjamara"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        
        <li>
          <a
            href="https://twitter.com/deadlyman_5"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
       <FontAwesomeIcon
       onClick={() => setShowNav(true)}
       icon={faBars} 
       color="#ffd700"
       size='3x'
       className='hamburger-icon'/>
    </div>
)
}


export default Sidebar
