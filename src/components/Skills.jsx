import React from "react";
import reactImg from '../media/react.png'
import bootstrapImg from '../media/bootstrap.png'
import gitImg from '../media/git.png'
import mongodbImg from '../media/mongodb.png'
import mysqlImg from '../media/mysql.png'
import expressImg from '../media/express.png'
import ejsImg from '../media/ejs.png'
import nodeImg from '../media/node.png'
function Skills(){
    return(
        <div id='skills'>
            <h2>My Skills</h2>
            <div id="skillList">
                <img src={reactImg}/>
                <img src={bootstrapImg}/>
                <img src={gitImg}/>
                <img src={nodeImg}/>
                <img src={expressImg}/>
                <img src={ejsImg}/>
                <img src={mysqlImg}/>
                <img src={mongodbImg}/>
            </div>
        </div>
    )
}
export default Skills;