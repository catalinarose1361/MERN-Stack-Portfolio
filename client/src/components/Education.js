import React, { useState } from 'react';

import { Certificate, Book, Briefcase, Close } from 'grommet-icons';

import  {  Heading, Text, DropButton, Box, Card } from 'grommet';

import {Row, Col, Popover, Button, Divider  } from 'antd';


const Education = () => {

  
    const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );
      


    return (
        <div id="educationdiv">
            <Row  justify="center">

            <Divider>
        <Heading margin="none">Education</Heading>
        </Divider>

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

        </div>  

    )

}

export default Education