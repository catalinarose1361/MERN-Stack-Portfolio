import React from 'react';

import { useState } from 'react';

import  { Heading, Text, Card } from 'grommet';

import { Grommet, Stripe } from 'grommet-icons';

import { AntDesignOutlined } from '@ant-design/icons';

import {Row, Col, Divider } from 'antd';

const Skills = () => {

    const [skills, setSkills] = useState(
        
        [

            // MONGODB
            "https://img.icons8.com/color/96/000000/mongodb.png",


            //github
            "https://img.icons8.com/color-glass/100/000000/github.png",


            //JavaScript
           "https://img.icons8.com/color/100/000000/javascript--v1.png",

            //HTML5
            "https://img.icons8.com/color/96/000000/html-5--v2.png",

            //JSON
            "https://img.icons8.com/nolan/96/json.png",

            //VISUAL STUDIO CODE
            "https://img.icons8.com/color/90/000000/visual-studio-code-2019.png",

            //APIS
            "https://img.icons8.com/color-glass/96/000000/api-settings.png",

            //GIT
            "https://img.icons8.com/color/100/000000/git.png",

            //TYPESCRIPT
            "https://img.icons8.com/color/100/000000/typescript.png",

            //SASS
            "https://img.icons8.com/color/100/000000/sass-avatar.png",

            //CSS3
            "https://img.icons8.com/color/90/000000/css3.png",

            //JQUERY
            "https://img.icons8.com/ios-filled/100/000000/jquery.png",

            //NODE.JS
            "https://img.icons8.com/color/96/000000/nodejs.png",

            //REACT
            "https://img.icons8.com/color/100/000000/react-native.png",

            //HEROKU
            "https://img.icons8.com/color/96/000000/heroku.png",

            //MYSQL
            "https://img.icons8.com/fluency/96/000000/mysql-logo.png",

            //REDUX
            "https://img.icons8.com/color/100/000000/redux.png",

            //BOOTSTRAP
            "https://img.icons8.com/color/96/000000/bootstrap.png",

            //POSTMAN
            "https://img.icons8.com/dusk/100/000000/postman-api.png",

            //NPM 
            "https://img.icons8.com/color/100/000000/npm.png",

            //LESS
            "https://img.icons8.com/windows/96/000000/less-logo.png"

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
                        
                                <img key={ index } src={skill} />

                            </Col>;

                })}

            </Row>

            <Row>

                <Col span={8}>

                    <AntDesignOutlined style={{ fontSize: '100px' }}/>

                </Col>
            
                <Col span={8}>

                    <Grommet color="brand" size="100px" />

                </Col>

                <Col span={8}>

                    <Stripe size="100px" />

                </Col>

            </Row>
            
        </div>
        
    )
}

export default Skills;