import React from 'react';
import { Css3, Heroku, Home, Js, Mysql, Node, Npm, Close, Certificate, Book, Briefcase } from 'grommet-icons';
import  { Card, CardHeader, CardBody, CardFooter, Button, Box, DropButton, Heading, Anchor, Grid } from 'grommet';
import {useState, useEffect } from 'react';
import {Row, Col,  } from 'antd';


const Education = () => {

    return (
<>
<Row  justify="center">
<Heading margin="none">Education</Heading> 
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