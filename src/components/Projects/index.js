import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimateLetters';
import projectData from '../data/project.json';
import './index.scss';
import { 
    faCode,
    faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () =>{
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass ('text-animate-hover');
        },3000);
        return () => {
            clearTimeout(timer);
        }
    });
    // console.log(projectData)

    const renderProjects = (porjects) => {
        return (
            <div className='image-container'>
                {
                    porjects.map((port, idx) =>{
                        return (
                            <div className='image-box' key={idx}>
                                <img src={port.cover} className="Project-image" alt='Projects'></img>
                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    
                                    <button className='btn' onClick={() => window.open(port.site)}><span>PREVIEW </span>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </button>
                                    <br></br>
                                    <button className='btn' onClick={() => window.open(port.github)}><span>REPO</span><FontAwesomeIcon icon={faCode} /></button>
                                    </div>
                            </div>
                        )

                    })
                }
            </div>
        )
    }

   
    return (
        <>
        <div className="container project-page">
            <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['P', 'r','o','j','e', 'c', 't', 's']}
                idx={15} />
                </h1>
                

            </div>
        </div>
        <div className='InfoContain'>{renderProjects(projectData.projects)}</div>
        <Loader type='pacman' />
        </>
    );
}

export default Projects;