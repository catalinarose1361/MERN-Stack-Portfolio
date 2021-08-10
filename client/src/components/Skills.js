import React from 'react';

import  { Heading, Text } from 'grommet';

import { Css3, Heroku, Html5, Js, Mysql, Node, Npm, Reactjs } from 'grommet-icons';

import {Row, Col,  } from 'antd';

const Skills = () => {

    return (

        <>

            <Row justify="center">

                <Heading margin="none">Skills</Heading>

            </Row>

            <Row  justify="center">

                <Text>  Lorem ipsum dolor sit amet,

                    consectetur adipiscing elit,

                    sed do eiusmod tempor incididunt ut

                    labore et dolore magna aliqua.

                </Text>

            </Row>

            <Row justify="center">

                <Col span={8}>

                    <Mysql size='large'  />

                </Col>

                <Col span={8}>

                    <Node size='large'  />

                </Col>

                <Col span={8}>

                    <Npm size='large'  />

                </Col>

            </Row>

            <Row justify="center">

                <Col span={8}>

                    <Reactjs size='large'  />

                </Col>

                <Col span={8}>

                    <Css3 size='large'  />

                </Col>

                <Col span={8}>

                    <Heroku size='large'  />

                </Col>

            </Row>

            <Row justify="center">

                <Col span={12}>

                    <Html5 size='large'  />

                </Col>

                <Col span={12}>

                    <Js size='large'  />

                </Col>
          
            </Row>
            
        </>
        
    )
}

export default Skills;