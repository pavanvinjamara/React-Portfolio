import Pavans1 from '../../assets/Images/pavansnap2-removebg-preview.png' ;
import Pavans2 from '../../assets/Images/pavan_snap-removebg-preview.png' ;
import Pavans3 from '../../assets/Images/ppppppn.png';
import Pavans4 from '../../assets/Images/pp.png';
import Pavans5 from '../../assets/Images/ppp.png';
import Pavans6 from '../../assets/Images/ppppn.png';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimateLetters';
import './index.scss';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

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
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['A', 'b','o','u','t', ' ', 'm', 'e']}
                idx={15} />
                </h1>

                <p>
                    Pavan,<br/>
                    Man Of Focus,<br/>
                    Commitment &
                    Sheerwill.
                </p>
                <p>
                I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
                </p>
                <p>
                I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
                </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className="face1">
                    <img src={Pavans1} className="img1" alt="logo" /> 
             
            </div>
            <div className="face2">
            <img src={Pavans2} className="img2" alt="logo" /> 
              
            </div>
            <div className="face3">
            <img src={Pavans3} className="img3" alt="logo" /> 
              
            </div>
            <div className="face4">
            <img src={Pavans4} className="img4" alt="logo" /> 
            </div>
            <div className="face5">
            <img src={Pavans5} className="img5" alt="logo" /> 
            </div>
            <div className="face6">
            <img src={Pavans6} className="img6" alt="logo" /> 
            </div>
                </div>
            </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About