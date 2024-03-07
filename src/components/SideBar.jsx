import React from 'react'

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
let englishVersion = false;
const languages = [{
    title: 'Web Developer'
},
{
    title: 'Desenvolvedor Web'
}
]
function changeLanguage(){
    let title = document.querySelector('#creatorTitle')
    if (englishVersion) {
        title.textContent = languages[0].title;
      } else {
        title.textContent = languages[1].title;
      }
    englishVersion = !englishVersion  
}
export default SideBar;