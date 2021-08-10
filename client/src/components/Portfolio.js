import React from 'react';

import {useState, useEffect} from 'react';

import  { Card, CardHeader, CardBody, CardFooter, Button, Box } from 'grommet';

import { Reactjs, Heroku, Github } from 'grommet-icons';

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

       
        <>

            {projects.map(project => {

                return (

                    <>

                        <Card  

                            height="large" 

                            width="medium" 

                            background={

                                <img src={project.image} />

                            }

                        >

                            <CardHeader 
                            
                                pad="medium">

                                {project.title}

                            </CardHeader>

                            <CardBody 
                            
                                pad="medium">

                                {project.description}

                            </CardBody>

                            <CardFooter 

                                pad={{horizontal: "small"}} 

                                background="light-2"

                            >

                                <Button

                                    href={project.heroku}

                                    icon={<Github color="red" />}

                                    hoverIndicator

                                />

                                <Reactjs />

                                <Button 

                                    href={project.github} 

                                    icon={<Heroku color="plain" />} 

                                    hoverIndicator 
                                    
                                />

                            </CardFooter>

                        </Card>

                    </>
        
                )

            })}

        </>
    )
    
}

export default Portfolio;

