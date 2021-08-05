import React from 'react';

import {useState, useEffect} from 'react';

import { Collapse, Card } from 'antd';

const Portfolio = () => {

    //USING STATE WHICH AT FIRST IS EMPTY BUT SOON WILL STORE DATA COLLECTED FROM MONGODB ATLAS
    //NOTE THE ARRAY OF OBJECTS, WILL BE SAVING MULTIPLE 'PROJECTS' OBJECTS 
    const [projects, setProjects] = useState([

        {
            title: " ",

            description: " ",

            technologies: [ ],

            heroku: " ",

            github: " ",

            image: " "

        }

    ])

    //FETCH DATA FROM THE ROUTE AND RETURN A JSON
    useEffect(() => {

        fetch('/projects').then(res => {

            if(res.ok) {

                console.log(res.json)

                return res.json()

            }

            //SET STATE EQUAL TO THE JSON RESPONSE
        }).then(jsonRes => setProjects(jsonRes))

    })

    return (

        <div id="portfolioDiv" >

            {projects.map(project => {

                return (

                    <div>

                        <h1>{project.title}</h1>

                        <p>{project.description}</p>

                        <p>{project.heroku}</p>

                        <p>{project.github}</p>

                        <img src={project.image}/>

                        <list>
                            
                            Technologies:

                            <li>

                                {project.technologies[0]}

                            </li>

                        </list>

                    </div>
        
                )

            })}

        </div>

    )
    
}

export default Portfolio;

