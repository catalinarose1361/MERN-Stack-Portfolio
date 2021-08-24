import React, { useState } from 'react';

import { Certificate, Book, Briefcase, Close } from 'grommet-icons';

import  {  Heading, Text, DropButton, Box, Card, Tab, Tabs, Image } from 'grommet';

import {Row, Col, Popover, Button, Divider  } from 'antd';


const Education = () => {

  

      


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

            <Tabs height='medium' flex='grow' alignSelf='center'>
      <Tab title={<Book size="xlarge"/>}>
        <Box
          margin='small'
          pad='small'
        >
          <Text>Content for the First Tab</Text>
        </Box>
      </Tab>
      <Tab title={<Certificate size="xlarge" />}>
        <Box
          margin='small'
          pad='small'
        >
          <Text>Content for the Second Tab</Text>

        </Box>
      </Tab>
      <Tab title={<Briefcase size="xlarge" />}>
        <Box
          flex='grow'
          margin='small'
          pad='small'
        >
          <Image src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
        </Box>
      </Tab>
    </Tabs>

            </Row>

        </div>  

    )

}

export default Education