import React from 'react';

import { Certificate, Book, Briefcase } from 'grommet-icons';

import  {  Heading, Text } from 'grommet';

import {Row, Col,  } from 'antd';


const Education = () => {

    return (
        <>
            <Row  justify="center">

                <Heading margin="none">Education</Heading> 

            </Row>

            <Row  justify="center">

                <Text> 

                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.

                </Text>

            </Row>

            <Row  justify="center">

                <Col>

                    <Briefcase size="xlarge"/>

                </Col>

                <Col>

                    <Certificate size="xlarge"/>

                </Col>

                <Col>

                    <Book size="xlarge"/>

                </Col>

            </Row>

        </>  

    )

}

export default Education