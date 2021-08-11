import React from 'react';

//ANT DESIGN COMPONENTS IMPORT
import {  Row, Col } from 'antd';

import  { Card, Heading, Paragraph, CardFooter, Text, CardHeader, CardBody } from 'grommet';

import {  Node, Reactjs } from 'grommet-icons';

import profPic from '../images/IMG_5406.JPG';

const About = () => {

    return (

        <>

            <Row justify="center">

                <Heading>

                    Biography

                </Heading>

            </Row>

            {/* THIS ROW CONTAINS ABOUT ME TEXT AND PHOTO */}
            <Row justify="center">

                 {/*  COL CONTAINS MAIN TEXT FOR "ABOUT ME" PAGE*/}
                <Col span={13}>

                    <Paragraph>

                        Pleased to meet you, and thank you for taking time out of your busy day to check out my portfolio! Allow me to tell you a little bit about myself, and my qualifications.

                    </Paragraph>

                    <Paragraph>

                        My name is Catalina, I'm a Full-Stack JavaScript Developer living in the beautiful state of Colorado. I spend my days committing code to GitHub, exercising with my VR headset, and caring for my dog.

                    </Paragraph>

                    <Paragraph>

                        A few years ago, I began to grow tired of customer service jobs. After six years of full-time work, I wasn't growing professionally or intellectually. Eventually, I decided to switch career paths and make a daring leap into the Technology Industry.

                    </Paragraph>

                    <Paragraph>

                        I earned my Web Development qualifications at the University of Denver's Coding Bootcamp. I developed skills in JavaScript, HTML, CSS, jQuery, MySQL, MongoDB, Node.js, React.js, Git, and more. I graduated in April 2020, certifying 240 classroom hours completed.

                    </Paragraph>

                    <Paragraph>

                        Post-Bootcamp, I have continued to develop my skills in pursuit of a Career as a Full Stack JavaScript Developer. I specialize in building Web Applications using M.E.R.N Stack Technologies and deploying them live to Heroku. If you would like to check out my portfolio of personal projects, please visit click the "projects" button at the top of this page.

                    </Paragraph>

                    <Paragraph>

                        I'm currently seeking Full-Time opportunities, and open to relocation anywhere. If you would like to reach out regarding a job opportunity please email me at webdevcatalina@gmail.com or message me on LinkedIn. I look forward to hearing from you!

                    </Paragraph>

                </Col>

                <Col span={9}>

                    <Card>

                        <CardHeader>

                            <Text>Catalina Williams</Text>

                        </CardHeader>

                        <CardBody>

                            {/* CATALINA'S PROFILE PICTURE  */}
                            <img

                                height={700}

                                width={800}

                                src={profPic}

                            />

                        </CardBody>
                  
                        <CardFooter pad={{horizontal: "small"}} >

                            <Reactjs size="large" />

                            <Node size="large" />

                        </CardFooter>

                    </Card>
                
                </Col>

            </Row>

        
        </>

    );
       
};

export default About;