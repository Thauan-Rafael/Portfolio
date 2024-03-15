import React from 'react';
import languages from '../languages';
import { toast } from 'react-toastify';
import englishVideo from '../media/englishVersion.mp4'
import brazilianVideo from '../media/brazilianVersion.mp4'


function SideBar(){
    return(
        <div id='sideBar'>
            <i id='barLink1' className="icon fa-solid fa-home fa-2x" onClick={redirectUser}></i>
            <i id='barLink2' className="icon fa-solid fa-user fa-2x" onClick={redirectUser}></i>
            <i id='barLink3' className="icon fa-solid fa-lightbulb fa-2x" onClick={redirectUser}></i>
            <i id='barLink4' className="icon fa-solid fa-folder fa-2x" onClick={redirectUser}></i>
            <i className="icon fa-solid fa-language fa-2x" onClick={changeLanguage}></i>
        </div>
    )
}

function redirectUser(event){
    const clickedLink = event.target.id;
    let redirect = '';
    switch (clickedLink) {
        case 'barLink1':
            redirect = document.getElementById('home');
            redirect.scrollIntoView({behavior: 'smooth'}) 
            break;
        case 'barLink2':
            redirect = document.getElementById('about');
            redirect.scrollIntoView({behavior: 'smooth'}) 
            break;
        case 'barLink3':
            redirect = document.getElementById('skills');
            redirect.scrollIntoView({behavior: 'smooth'}) 
            break;
    case 'barLink4':
            redirect = document.getElementById('projects');
            redirect.scrollIntoView({behavior: 'smooth'}) 
            break;        
        default:
            break;
    }
}
let englishVersion = true;
function changeLanguage(){
    if (!englishVersion) {
        document.querySelector('#creatorTitle').textContent = languages[0].homeTitle;
        document.querySelector('#aboutTitle').textContent = languages[0].aboutTitle;
        document.querySelector('#personalVideo').src = englishVideo;
        document.querySelector('#skillsTitle').textContent = languages[0].skillsTitle;
        document.querySelector('#projectsTitle').textContent = languages[0].projectsTitle;
        document.querySelector('#moreProjects').textContent = languages[0].moreProjects;
        document.querySelectorAll('#aboutText p').forEach((item,index) => {item.textContent = languages[0].aboutPoints[index]})
        document.querySelectorAll('.card-text').forEach((item,index) => {item.textContent = languages[0].projectsList[index]})
        toast('English Version', {
            position: "bottom-right",autoClose: 3000,hideProgressBar: true,closeOnClick: true,
            pauseOnHover: true,progress: undefined,theme: "dark",icon: false, className: 'portfolioToast'
            });
    }
    else {
        document.querySelector('#creatorTitle').textContent = languages[1].homeTitle;
        document.querySelector('#aboutTitle').textContent = languages[1].aboutTitle;
        document.querySelector('#personalVideo').src = brazilianVideo;
        document.querySelector('#skillsTitle').textContent = languages[1].skillsTitle;
        document.querySelector('#projectsTitle').textContent = languages[1].projectsTitle;
        document.querySelector('#moreProjects').textContent = languages[1].moreProjects;
        document.querySelectorAll('#aboutText p').forEach((item,index) => {item.textContent = languages[1].aboutPoints[index]})
        document.querySelectorAll('.card-text').forEach((item,index) => {item.textContent = languages[1].projectsList[index]})
        toast('Versão PT-BR', {
            position: "bottom-right",autoClose: 3000,hideProgressBar: true,closeOnClick: true,
            pauseOnHover: true,progress: undefined,theme: "dark",icon: false, className: 'portfolioToast'
            });
    }
    englishVersion = !englishVersion
}
export default SideBar;