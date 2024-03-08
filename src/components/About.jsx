import React from 'react';
import tempVideo from '../media/tempVideo.mp4'
import languages from '../languages';

function About(){
    return(
        <div id='about' className='container-fluid'>
        <h2 id='aboutTitle'>{languages[0].aboutTitle}</h2>
        <div id='aboutContent'>
            <div id='aboutText'>
                <p>{languages[0].aboutPoints[0]}</p>
                <p>{languages[0].aboutPoints[1]}</p>
                <p>{languages[0].aboutPoints[2]}</p>
                <p>{languages[0].aboutPoints[3]}</p>
                <p>{languages[0].aboutPoints[4]}</p>
                <p>{languages[0].aboutPoints[5]}</p>
            </div>
            <div>
                <video controls src={tempVideo}></video>
            </div>
        </div>
        </div>
    )
}

export default About;