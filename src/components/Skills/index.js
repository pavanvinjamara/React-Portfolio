import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimateLetters';
import LogoA from '../../assets/Images/andSymbol-removebg-preview.png';



import './index.scss';


import FramerMotion from '../FramerMotion';

const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['E','d','u','c','a','t','i','o','n', ' ', " "]
    const nameArr = [' ','S','k','i','l','l', 's']

    useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass ('text-animate-hover');
      },3000);
      return () => {
          clearTimeout(timer);
      }
  });
    return (
        <>
        <div className="container skill-page">
            <div className='text-zone'>
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <img src={LogoA}  className="symbolA" alt="logo" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArr} idx={24} />
                </h1>
                    <h2>Education</h2>
                    <table>
                        <tr>
                            <td>MIA University<br></br>
                            Computer Science</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>TKR College of Engineering and Technology<br></br>
                            Mechanical Engineering</td>
                            <td>2017-2021</td>
                        </tr>
                        <tr>
                            <td>Narayana Junior College<br></br>
                            Intermediate</td>
                            <td>2015-2017</td>
                        </tr>
                        <tr>
                            <td>Brilliant Model High School<br></br>
                            Matriculation</td>
                            <td>2014-2015</td>
                        </tr>
                    </table>
                    <div className='skills'>
                        <h2>Skills</h2>
                        <div className='frontend'>
                        <h4>FrontEnd Developer</h4>
                        <p>HTML5, CSS, JAVASCRIPT, SASS, REACT, REDUX.</p>
                        </div>
                        <div className='Backend'>
                            <h4>BackEnd Developer</h4>
                            <p>Progressing...</p>
                        </div>

                        <p>Visit my Linkedin profile for more details. Also you can checkout my cv on this link.</p>
                    </div> 
                   
                
                     </div>
                     
              </div>
                <FramerMotion/>
        <Loader type='pacman' />
        </>
        
    )
}

export default Skills