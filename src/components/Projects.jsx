import React from 'react';
import printTest from '../media/printTest.png'

function Projects(){
    return(
        <div id='projects'>
        <h2>Projects</h2>
            <div id='projectsList' className="row">
                <ProjectCard title={cards[0].title} text={cards[0].text}/>
                <ProjectCard title={cards[1].title} text={cards[1].text}/>
                <ProjectCard title={cards[2].title} text={cards[2].text}/>
            </div>
        <h3>More projects coming soon...</h3>    
        </div>    
    )
    function ProjectCard(props){
        return(
            <div className="card">
                <div id='cardImage'>
                <img className="card-img-top" src={printTest} alt="Card image cap"/>
                </div>
                <div className='card-header'>
                    <p>{props.title}</p>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                    <div id='cardButtons'>
                        <a>Website</a>
                        <a>Github</a>
                    </div>
                </div>
            </div>
        )
    }
}
const cards = [
    {
        image: '',
        title: 'Weather Searcher',
        text: 'App to see a weather from a place searching by coordinates using OpenWeatherMap. Created with Node.js, Express.js, EJS and Bootstrap.',
        webLink: '',
        githubLink: ''  
    },
    {
        image: '',
        title: 'Give Me Feedback',
        text: 'Web form that send feedbacks to a MongoDB database. Created with React,Bootstrap,Node.js, Express.js and MongoDB.',
        webLink: '',
        githubLink: ''
    },
    {
        image: '',
        title: 'Cats Chat',
        text: 'Landing page of a software to adopt cats. Created with React and Bootstrap.',
        webLink: '',
        githubLink: ''
    }
]
export default Projects;