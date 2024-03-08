import React from "react";
import reactImg from '../media/react.png'
import bootstrapImg from '../media/bootstrap.png'
import gitImg from '../media/git.png'
import mongodbImg from '../media/mongodb.png'
import mysqlImg from '../media/mysql.png'
import expressImg from '../media/express.png'
import ejsImg from '../media/ejs.png'
import nodeImg from '../media/node.png'
import languages from "../languages";

function Skills(){
    const [appName,setAppName] = React.useState('');
    return(
        <div id='skills'>
            <h2 id="skillsTitle">{languages[0].skillsTitle}</h2>
            <div id="skillList" onMouseLeave={clearAppName}>
                <SkillImgs id= "React" img= {reactImg}/> 
                <SkillImgs id= "Bootstrap" img= {bootstrapImg}/> 
                <SkillImgs id= "Node.js" img= {nodeImg}/> 
                <SkillImgs id= "Express.js" img= {expressImg}/> 
                <SkillImgs id= "EJS" img= {ejsImg}/> 
                <SkillImgs id= "Git" img= {gitImg}/> 
                <SkillImgs id= "MySQL" img= {mysqlImg}/> 
                <SkillImgs id= "MongoDB" img= {mongodbImg}/> 
            </div>
            <h3 id="selectedApp">{appName}</h3>
        </div>
    )
    function clearAppName(){setAppName('')}
    function SkillImgs(props){
        return(<img id={props.id} src={props.img} onMouseOver={(event) =>{setAppName(event.target.id)}}/>)
    }
}

export default Skills;