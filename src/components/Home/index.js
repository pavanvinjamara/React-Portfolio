import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimateLetters';
import { useEffect, useState, useRef } from 'react';
import Particles from '../BackParticles/Particles';
import Loader from 'react-loaders';
import Lottie from 'lottie-web';
import { Typewriter } from "react-simple-typewriter";



const Home = () => {

  const container = useRef(null)
  
  useEffect(() =>{
    Lottie.loadAnimation({
      container : container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./Office.json')
    })
  }, [])

  const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['V','i','n','j','a','m','a','r','a',' ','p','a','v','a','n',' ','k','u','m','a','r']
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
    <div className="container home-page">
            <div className="text-zone">
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span><br />
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
              <br /> 
              </h1>
              <div className='typer'>
              <Typewriter
              words={["Web Developer,","Creative,","Quick Learner"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1500}
              />
              </div>

              <h2>LET'S STRIVE FOR "GREATER COLLECTIVE ENLIGHTMENT".</h2>
              
              <Link to="/contact" className="flat-button">CONTACT ME</Link>
             
            </div>
              <div className='lottiecontain' ref={container}></div>
              
             
            
              <Particles id="tsparticles" />
      </div>
        <Loader type='pacman'/>
    </>
        
    );
}



export default Home
