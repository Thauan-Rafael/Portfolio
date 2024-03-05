import React from 'react';
import weatherImg from '../media/weatherIMG.png'
import catsImg from '../media/catsIMG.png'
import feedbackImg from '../media/feedbackIMG.png'

function Projects(){
    return(
        <div id='projects'>
        <h2>Projects</h2>
            <div id='projectsList' className="row">
                <ProjectCard title={cards[0].title} text={cards[0].text} image={cards[0].image}/>
                <ProjectCard title={cards[1].title} text={cards[1].text} image={cards[1].image}/>
                <ProjectCard title={cards[2].title} text={cards[2].text} image={cards[2].image}/>
            </div>
        <h3>More projects coming soon...</h3>    
        </div>    
    )
    function ProjectCard(props){
        return(
            <div className="card">
                <div id='cardImage'>
                <img className="card-img-top" src={props.image} alt="Card image cap"/>
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
        image: weatherImg,
        title: 'Weather Searcher',
        text: 'App to see a weather from a place searching by coordinates using OpenWeatherMap. Created with Node.js, Express.js, EJS and Bootstrap.',
        webLink: '',
        githubLink: ''  
    },
    {
        image: catsImg,
        title: 'Cats Chat',
        text: 'Landing page of a software to adopt cats. Created with React and Bootstrap.',
        webLink: '',
        githubLink: ''
    },
    {
        image: feedbackImg,
        title: 'Give Me Feedback',
        text: 'Web form that send feedbacks to a MongoDB database. Created with React,Bootstrap,Node.js, Express.js and MongoDB.',
        webLink: '',
        githubLink: ''
    }
]
export default Projects;