import React from 'react';
import reactImg from '../media/react.png'

function Projects(){
    return(
        <div id='projects' className='row'>
        <h2>Projects</h2>
            <div className="projectsList col-sm-6 col-lg-4">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
        
    )
    function ProjectCard(){
        return(
            <div className="card">
                <img className="card-img-top" src={reactImg} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}
export default Projects;