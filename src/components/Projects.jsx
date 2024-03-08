import React from 'react';
import weatherImg from '../media/weatherIMG.png'
import catsImg from '../media/catsIMG.png'
import feedbackImg from '../media/feedbackIMG.png'
import languages from '../languages';

function Projects(){
    return(
        <div id='projects'>
        <h2 id='projectsTitle'>{languages[0].projectsTitle}</h2>
            <div id='projectsList' className="row">
                <ProjectCard title={cards[0].title} text={cards[0].text} image={cards[0].image}/>
                <ProjectCard title={cards[1].title} text={cards[1].text} image={cards[1].image}/>
                <ProjectCard title={cards[2].title} text={cards[2].text} image={cards[2].image}/>
            </div>
        <h3 id='moreProjects'>{languages[0].moreProjects}</h3>    
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
        text: languages[0].projectsList[0],
        webLink: '',
        githubLink: ''  
    },
    {
        image: catsImg,
        title: 'Cats Chat',
        text: languages[0].projectsList[1],
        webLink: '',
        githubLink: ''
    },
    {
        image: feedbackImg,
        title: 'Give Me Feedback',
        text: languages[0].projectsList[2],
        webLink: '',
        githubLink: ''
    }
]
export default Projects;