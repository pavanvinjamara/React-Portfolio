
import './index.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons'

const NavLink = () => {
    return (
    
        <div className='links'>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vinjamara-pavan-kumar-3559bb259/"
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
    </div>
    )
}


export default NavLink;