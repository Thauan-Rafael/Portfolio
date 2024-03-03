import React from "react";
import creatorImg from '../media/creatorImg.png';
function Home(){
    return(
        
        <div id="home">
            <img src={creatorImg}></img>
            <div id="homeHeader">
                <h1>Thauan Rafael</h1>
                <h2>Web Developer</h2>
                <div id="homeButtons">
                    <button type="button" className="icon fa-brands fa-github"></button>
                    <button type="button" className="icon fa-brands fa-linkedin"></button>
                </div>
            </div>
        </div>
    )
}
export default Home;