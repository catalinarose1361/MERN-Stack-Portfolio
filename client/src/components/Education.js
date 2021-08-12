import React, { useState } from 'react';

import { Certificate, Book, Briefcase, Close } from 'grommet-icons';

import  {  Heading, Text, DropButton, Box, } from 'grommet';

import {Row, Col, Popover, Button  } from 'antd';


const Education = () => {

  
    const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );
      


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
                <Popover content={content} trigger="hover" >
                <Button icon={<Briefcase size="xlarge"/>}/>
                
  </Popover>

                   
    

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