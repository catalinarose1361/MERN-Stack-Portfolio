import React from 'react';

import { useState } from 'react';

import  { Heading, Text, Card } from 'grommet';

import { Grommet, Stripe } from 'grommet-icons';

import { AntDesignOutlined } from '@ant-design/icons';

import {Row, Col, Divider, Popover } from 'antd';
// import expressIcon from "../images/expressjs-icon.png"
const Skills = () => {

    const [skills, setSkills] = useState(
        
        [
        {
            name: "MongoDB",
            icon: "https://img.icons8.com/color/96/000000/mongodb.png",
            description: "A Backend Cloud Database"
        },
        {
            name: "Github",
            icon: "https://img.icons8.com/color-glass/100/000000/github.png",
            description: "Version Control"
        },
        {
            name: "JavaScript",
            icon: "https://img.icons8.com/color/100/000000/javascript--v1.png",
            description: "A Coding Language"
        },
        {
            name: "HTML5",
            icon: "https://img.icons8.com/color/96/000000/html-5--v2.png",
            description: "The skeleton of a web page"
        },
        {
            name: "JSON",
            icon: "https://img.icons8.com/nolan/96/json.png",
            description: "Data Structure Type"
        },
        {
            name: "Visual Studio Code",
            icon: "https://img.icons8.com/color/90/000000/visual-studio-code-2019.png",
            description: "Code Editor"
        },
        {
            name: "APIS",
            icon: "https://img.icons8.com/color-glass/96/000000/api-settings.png",
            description: "A collection of data"
        },
        {
            name: "Sass",
            icon: "https://img.icons8.com/color/100/000000/sass-avatar.png",
            description: "CSS Styling"
        },
        {
            name: "CSS3",
            icon: "https://img.icons8.com/color/90/000000/css3.png",
            description: "makes the websites pretty"
        },
        {
            name: "jQuery",
            icon: "https://img.icons8.com/ios-filled/100/000000/jquery.png",
            description: "Short JavaScript"
        },
        {
            name: "Node.js",
            icon: "https://img.icons8.com/color/96/000000/nodejs.png",
            description: "Runs JS code not on the browser"
        },
        {
            name: "React.js",
            icon: "https://img.icons8.com/color/100/000000/react-native.png",
            description: "A JS Framework"
        },
        {
            name: "Heroku",
            icon: "https://img.icons8.com/color/96/000000/heroku.png",
            description: "Application Hosting"
        },
        {
            name: "MySQL",
            icon: "https://img.icons8.com/fluency/96/000000/mysql-logo.png",
            description: "Relational Database"
        },
        {
            name: "Redux",
            icon: "https://img.icons8.com/color/100/000000/redux.png",
            description: "Does something in react"
        },
        {
            name: "Bootstrap",
            icon: "https://img.icons8.com/color/96/000000/bootstrap.png",
            description: "Version Control"
        },
        {
            name: "Npm",
            icon: "https://img.icons8.com/color/100/000000/npm.png",
            description: "node package handler"
        },
        {
            name: "Less",
            icon: "https://img.icons8.com/windows/96/000000/less-logo.png",
            description: "CSS styling"
        },
        {
            name: "Git",
            icon: "https://img.icons8.com/color/100/000000/git.png",
            description: "Version Control"
        }
        // {
        //     name: "Express.js",
        //     icon: expressIcon,
        //     description: "Node.js web application framework"
        // },

   



         


      


      

   

          


         

         

         

         
         


          


           

            
          

    

        ]

    )

    return (

        <div id="skillsdiv">

            <Row justify="center">

            <Divider>
        <Heading margin="none">Technical Skills</Heading>
        </Divider>

            </Row>

            <Row  justify="center">

                <Text>  Lorem ipsum dolor sit amet,

                    consectetur adipiscing elit,

                    sed do eiusmod tempor incididunt ut

                    labore et dolore magna aliqua.

                </Text>

            </Row>

            <Row 
            
                justify="center">

                {skills.map(function(skill, index){

                    return <Col span={8}>
                                <Popover title={skill.name} content={skill.description}>
                                <img key={ index } src={skill.icon} /> 
                                </Popover>
                                

                            </Col>;

                })}

            </Row>

            <Row>

            

                <Col span={8}>

                    <Popover content="A React UI Library https://ant.design" title="Ant Design" trigger="hover">

                        <AntDesignOutlined style={{ fontSize: '100px' }}/>

                    </Popover>

                </Col>
            
                <Col span={8}>

                    <Popover content="A React UI Library https://v2.grommet.io/" title="Grommet">
                    <Grommet color="brand" size="100px" />
                    </Popover>

                    

                </Col>
              

              

            </Row>
            
        </div>
        
    )
}

export default Skills;