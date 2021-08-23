import React from 'react';

import {useState, useEffect} from 'react';

import  { Card, CardHeader, CardBody, CardFooter, Button, Heading } from 'grommet';

import { Reactjs, Heroku, Github } from 'grommet-icons';

import {Row, Col, Divider  } from 'antd';

const Portfolio = () => {

    //USING STATE WHICH AT FIRST IS EMPTY BUT SOON WILL STORE DATA COLLECTED FROM MONGODB ATLAS
    //NOTE THE ARRAY OF OBJECTS, WILL BE SAVING MULTIPLE 'PROJECTS' OBJECTS 
    const [projects, setProjects] = useState([

        {
            title: " ",

            description: " ",

            technologies: [ ],

            heroku: " ",

            github: " "

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
        <div id="projectsdiv">
        
        <Row justify="center">
        <Divider>
        <Heading margin="none">Personal Projects</Heading>
        </Divider>
            
        </Row>

        <Row>

            {projects.map(project => {

                return (

                    <Col>

                        <Card  

                            height="large" 

                            width="medium" 

                            // background={

                            //     <img src={} />

                            // }

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

                    </Col>
        
                )

            })}

        </Row>
        </div>
    )

}

export default Portfolio;

