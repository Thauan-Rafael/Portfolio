import React from 'react';
import weatherImg from '../media/weatherIMG.png'
import catsImg from '../media/catsIMG.png'
import feedbackImg from '../media/feedbackIMG.png'
import crudImg from '../media/crudIMG.png'
import foodsImg from '../media/foodsIMG.png'
import quizImg from '../media/quizIMG.png'
import languages from '../languages';

function Projects(){
    return(
        <div id='projects'>
        <h2 id='projectsTitle'>{languages[0].projectsTitle}</h2>
            <div id='projectsList' className="row">
                <ProjectCard title={cards[0].title} text={cards[0].text} image={cards[0].image} siteId={cards[0].siteId} gitId={cards[0].gitId}/>
                <ProjectCard title={cards[1].title} text={cards[1].text} image={cards[1].image} siteId={cards[1].siteId} gitId={cards[1].gitId}/>
                <ProjectCard title={cards[2].title} text={cards[2].text} image={cards[2].image} siteId={cards[2].siteId} gitId={cards[2].gitId}/>
                <ProjectCard title={cards[3].title} text={cards[3].text} image={cards[3].image} siteId={cards[3].siteId} gitId={cards[3].gitId}/>
                <ProjectCard title={cards[4].title} text={cards[4].text} image={cards[4].image} siteId={cards[4].siteId} gitId={cards[4].gitId}/>
                <ProjectCard title={cards[5].title} text={cards[5].text} image={cards[5].image} siteId={cards[5].siteId} gitId={cards[5].gitId}/>
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
                        <a id={props.siteId} onClick={openLink}>Website</a>
                        <a id={props.gitId} onClick={openLink}>Github</a>
                    </div>
                </div>
            </div>
        )
    }
}
const cards = [
    {
        image: quizImg,
        title: 'RNG Math Quiz',
        text: languages[0].projectsList[0],
        webLink: '',
        githubLink: '',
        siteId: '0',
        gitId: '00',
    },
    {
        image: catsImg,
        title: 'Cats Chat',
        text: languages[0].projectsList[1],
        siteId: '1',
        gitId: '01',
    },
    {
        image: feedbackImg,
        title: 'Give Me Feedback',
        text: languages[0].projectsList[2],
        siteId: '2',
        gitId: '02',
    },
    {
        image: crudImg,
        title: 'CRUD Logic',
        text: languages[0].projectsList[3],
        siteId: '3',
        gitId: '03',
    },
    {
        image: foodsImg,
        title: 'TR Dev Foods',
        text: languages[0].projectsList[4],
        siteId: '4',
        gitId: '04',
    },
    {
        image: weatherImg,
        title: 'Weather Searcher',
        text: languages[0].projectsList[5],
        webLink: '',
        githubLink: '',
        siteId: '5',
        gitId: '05', 
    }
]
function openLink(event){
    const linkClicked = event.target.id;
    switch (linkClicked) {
        case '0':
            window.open('https://rngmathquiz.onrender.com/','_blank').focus();
            break;
        case '1':
            window.open('https://cats-chat.onrender.com/','_blank').focus();
            break;
        case '2':
            window.open('https://givemefeedback.onrender.com/','_blank').focus(); 
            break;
        case '3':
            window.open('https://crudlogic.onrender.com/','_blank').focus(); 
            break;
        case '4':
            window.open('https://devfoods.onrender.com/','_blank').focus(); 
            break;
        case '5':
            window.open('https://weather-searcher.onrender.com/','_blank').focus();
            break;            
        case '00':
            window.open('https://github.com/Thauan-Rafael/Quiz','_blank').focus();
            break;
        case '01':
            window.open('https://github.com/Thauan-Rafael/CatsChat-React','_blank').focus();
            break;
        case '02':
            window.open('https://github.com/Thauan-Rafael/FeedbackProject','_blank').focus(); 
            break;
        case '03':
            window.open('https://github.com/Thauan-Rafael/CrudLogic','_blank').focus(); 
            break;
        case '04':
            window.open('https://github.com/Thauan-Rafael/Food','_blank').focus();
            break;
        case '05':
            window.open('https://github.com/Thauan-Rafael/Weather','_blank').focus();
            break;                 
        default:
            break;
    }
}
export default Projects;