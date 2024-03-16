import React from "react";
import creatorImg from '../media/creatorImg.png';
import languages from "../languages";
function Home(){
    return(
        
        <div id="home">
            <img src={creatorImg}></img>
            <div id="homeHeader">
                <h1>Thauan Rafael</h1>
                <h2 id="creatorTitle">{languages[0].homeTitle}</h2>
                <div id="homeButtons">
                    <button id="githubBtn" type="button" className="icon fa-brands fa-github" onClick={socialLink}></button>
                    <button id="LinkedinBtn" type="button" className="icon fa-brands fa-linkedin" onClick={socialLink}></button>
                </div>
            </div>
        </div>
    )
}
function socialLink(event){
    const buttonClicked = event.target.id;
    if(buttonClicked == 'githubBtn'){
        window.open('https://github.com/Thauan-Rafael','_blank').focus();
    }
    else{
        window.open('https://br.linkedin.com/in/thauan-rafael-0556a7294','_blank').focus();
    }
}
export default Home;