import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimateLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import NavLink from '../NavLink';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass ('text-animate-hover');
      },3000);
      return () => {
          clearTimeout(timer);
      }
  });

    const reform = useRef()
    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
        .sendForm('gmail', 'template_qrbvu7p', reform.current,'rIgeicl1L50El4PFc')
        .then(
          () => {
            alert('Message successfully sent!')
          },
          () => {
            alert('Message send successfully')
          }
        )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
            <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in  looking to collaborate on anything that related to tech  - especially on ambitious
            or projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={reform} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input placeholder="Subject" type="text"  name="subject" required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
              </div>
            </div>
            <div className='mobileLink'> <NavLink/></div>
            <div className="info-map">
          Vinjamara Pavan Kumar,
          <br />
          India,
          <br />
          Nizamabad, <br />
          Nizamabad <br />
          <br />
          <span>pavanvinjamara323@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[18.6725, 78.0941]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.6725, 78.0941]}>
              <Popup>Pavan lives here, meet him & strive for <strong>Greater Collective Enlightment </strong> :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Contact