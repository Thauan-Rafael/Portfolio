import React from 'react';
import tempVideo from '../media/tempVideo.mp4'
function About(){
    return(
        <div id='about' className='container-fluid'>
        <h2>About Me</h2>
        <div id='aboutContent'>
            <div id='aboutText'>
                <p> - FullStack Web Developer</p>
                <p> - Studying Systems Analysis and Development</p>
                <p> - Worked as IT Assistant doing computer assembly,repair and technical support</p>
                <p> - Intermediate English speaker</p>
                <p> - Email: thauanrafaeltrabalho@gmail.com</p>
                <p> - Rio De Janeiro, Brazil</p>
            </div>
            <div>
                <video controls src={tempVideo}></video>
            </div>
        </div>
        </div>
    )
}

export default About;