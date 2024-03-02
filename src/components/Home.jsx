import React from "react";

function Home(){
    return(
        <div id="home" className="container-fluid">
            <div id="homeHeader">
                <h1>Thauan Rafael</h1>
                <h2>Web Developer</h2>
            </div>
            <div id="sectionsButtons">
                <button type="button" className="btn">About me</button>
                <button type="button" className="btn">Skills</button>
                <button type="button" className="btn">Projects</button>
                <button type="button" className="btn">Contact</button>
            </div>
        </div>
    )
}
export default Home;
