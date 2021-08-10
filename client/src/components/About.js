import React, { useState } from 'react';

//ANT DESIGN COMPONENTS IMPORT
import { Typography, Row, Col, Drawer, Button, PageHeader, Tag, Card, List } from 'antd';

// ANT DESIGN ICONS IMPORT
import { BookOutlined, ToolOutlined, ReadOutlined, SolutionOutlined } from '@ant-design/icons';


//RESUME IMPORT
import resume from "../documents/Catalina's Resume.pdf"

//DU CERTIFICATION IMPORT
import certification from "../documents/certificate.pdf"

const { Paragraph } = Typography;

//PHOTO URL
const profPic = "https://lh3.googleusercontent.com/9nFmZ_7IJx3yp0PZ-fanLWgsrJribKYYyYxR7T2n0-3QToM5Akhj8ZiW3wvBNR97DDhSNcxSGld6lgwkxE--dN2zTFBJwJwuCfjKVGgJu3bYAfM3X77aiCxsznCrl2BYZ76o-Q1aY3zt00RmSH0KU3HhS7BQ1a2LiOi_KJdhz8I-OzJY2oxlpwNeIxdApCiOtujNAQypKnmTZzkpp-EpuoxJecAnBEzC2tUBAdoZy6hl5pRifgoiMF8Vf2NTqJ9zA4l3hcBzP9nAeoikAJAcApWDoKSrnOvWEIWAgqqRz4QIFaBh1rphZa86qzQcH4RYd7iZ3e095Qv99pc8LDOwg4BjHQuXNKEZO4Lv1uAftMiyJsxYjNO_pZ7LLctzofDyQ_VuJw-FdPl7GGz4hJ7RC1HP9xdUekHf3XmQvKsiHKghjrk1xpP7wEXJgVNzw-4Y6TloYR8yjI_s6XO-Yz4qXy5qNpLuKZGBQTWr-YlCBDPX5sXAhShbtxO99AjpaB00EW-pwvICumUI0RUTbqn8mVjpZPWBxSXz-gGiBzGd9VAx2e0FPDF9ivOssiH7K6Ot0byZitWDQnUPhuwfaJMDIJNfBNYqPZIEJLEKs3BNHydyrTWANwh1HLzRnIoAEb3VQbrFVF_Yhiunmm7yeVL9AMQOJORAXfHDmGJC2Q9iA8S8OehdUurSsWQKf7UpVZ30M2EAoO3pkl_vR5pO6c6NkN8=w1316-h1478-no?authuser=3"

//SKILLS DATA

const frontEndSkill = ["HTML5", "jQuery", "JavaScript", "ReactJS", "CSS3", "Ant.Design"]

const backEndSkill = ["Python", "Node.js", "Git", "HerokuCLI", "APIs"]

const dbSkill = ["MySQL", "MongoDB",]

const About = () => {

    //STATE CREATED TO SET VISIBILITY OF DRAWER COMPONENTS

    //EDUCATION DRAWER VISIBILITY STATE SET TO FALSE AS DEFAULT
    const [visibleEducation, setVisibleEducation] = useState(false);

    //SKILLS DRAWER VISIBILITY STATE SET TO FALSE AS DEFAULT
    const [visibleSkills, setVisibleSkills] = useState(false);

    //showEducationDrawer GETS CALLED IN THE ONCLICK OF THE "SHOW EDUCATION" BUTTON
    const showEducationDrawer = () => {

        setVisibleEducation(true);

    };

    //showSkillsDrawer GETS CALLED IN THE ONCLICK OF THE "SHOW SKILLS" BUTTON
    const showSkillsDrawer = () => {

        setVisibleSkills(true);

    };

    //onCloseEducation GETS CALLED WHEN THE USER CLOSES THE EDUCATION DRAWER WINDOW 
    const onCloseEducation = () => {

        setVisibleEducation(false);

    };

    //onCloseSkills GETS CALLED WHEN THE USER CLOSES THE SKILLS DRAWER WINDOW
    const onCloseSkills = () => {

        setVisibleSkills(false);

    };

    return (

        <>
            {/* THIS ROW CONTAINS ABOUT ME TEXT AND PHOTO */}
            <Row justify="center">

                <Col span={13}>

                    <Card style={{maxWidth: '1500px', border: 'none'}}>

                        <PageHeader

                            title="Catalina Williams"

                            className="site-page-header"

                            subTitle="Full Stack JavaScript Developer"

                            tags={<Tag color="green">Seeking Full-Time Opportunities</Tag>}
       
                        >
      
                            {/* MAIN TEXT FOR "ABOUT ME" PAGE*/}
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

     
                        </PageHeader>
  
                    </Card>

                </Col>

                <Col span={9}>

                    {/* CATALINA'S PROFILE PICTURE  */}
                    <img

                        height={700}

                        width={800}

                        src={profPic}

                    />
      
                </Col>
   

            </Row>

            {/* THIS ROW CONTAINS DOWNLOADABLE RESUME AND CERTIFICATION BUTTONS, AND SKILLS AND EDUCATION DRAWER BUTTONS */}
            <Row>

                <Col  span={6}>
  
                    <Button  size="large" type="link" icon={ <ReadOutlined /> } onClick={showEducationDrawer}>

                        View Education

                    </Button>

                </Col>

                <Col  span={6}>

                    <Button size="large" type="link" icon={ <ToolOutlined /> } onClick={showSkillsDrawer}>

                        View Skillset

                    </Button>

                </Col>

                <Col  span={6}>

                    <Button size="large" type="link" icon={ <SolutionOutlined /> } href={resume} download>

                        Download Resume

                    </Button>

                </Col>

                <Col  span={6}>

                    <Button  size="large" type="link" icon={ <BookOutlined /> } href={certification} >

                        Download Certification

                    </Button>

                </Col>
 
            </Row>

            {/* THIS ROW CONTAINS EDUCATION AND SKILLS DRAWER COMPONENTS */}
            <Row justify="center">

                <Col span={12}>
      
                    <Drawer

                        title="Technical Skillset"

                        placement="right"

                        closable={true}

                        onClose={onCloseSkills}

                        visible={visibleSkills}

                        width="600"

                    >

                        <Row style={{marginTop:'50px'}} gutter={16} justify="center">
        
                            <Col span={8}>
  
                                <h4 orientation="center">Client Side</h4>
  
                                <List

                                    size="medium"

                                    itemLayout="horizontal"

                                    bordered

                                    dataSource={frontEndSkill}

                                    renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}

                                />
  
                            </Col>
  
                            <Col span={8}>
  
                                <h4 orientation="center">Server Side</h4>
  
                                <List

                                    size="medium"

                                    bordered

                                    dataSource={backEndSkill}

                                    renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}

                                />
  
                            </Col>
  
                            <Col span={8}>
  
                                <h4 orientation="center">Databases</h4>
  
                                <List

                                    size="medium"

                                    bordered

                                    dataSource={dbSkill}

                                    renderItem={item => 

                                        <List.Item>

                                            <Typography.Text level={3}>

                                                {item}

                                            </Typography.Text >
                                            
                                        </List.Item>
                                    }

                                />
  
                            </Col>

                        </Row>

                    </Drawer>

                </Col>

                <Col>

      
                    <Drawer

                        title="Education"

                        placement="right"

                        closable={true}

                        onClose={onCloseEducation}

                        visible={visibleEducation}

                        width="800"

                    >
                        {/* THIS CARD CONTAINS "UNIVERSITY OF DENVER CODING BOOTCAMP" INFO */}
                        <Card>

                            <PageHeader
      
                                title="University of Denver Coding Bootcamp"

                                tags={<Tag color="green">Graduated</Tag>}
      
                            >

                            </PageHeader>

                            {/* <Row> */}
         
                                <p>October 2019 - April 2020</p>
        

                            {/* </Row> */}

                        </Card>

                        {/* THIS CARD CONTAINS "UNIVERSITY OF COLORADO DENVER" INFO */}
                        <Card>

                            <PageHeader
      
                                title="University of Colorado Denver"

                                tags={<Tag color="orange">10 Credits Completed</Tag>}
      
                            >

                            </PageHeader>

                            <p>August 2014 - December 2014</p>

                        </Card>

                        {/* THIS CARD CONTAINS "PIKES PEAK COMMUNITY COLLEGE" INFO */}

                        <Card>

                            <PageHeader
      
                                title="Pikes Peak Community College"

                                tags={<Tag color="orange">47 Credits Completed</Tag>}
      
                            >

                            </PageHeader>

                            <p>August 2012 - May 2014</p>

                        </Card>

                        <Card>

                            <PageHeader
      
                            title="Cheyenne Mountain High School"

                            tags={<Tag color="green">Graduated</Tag>}
      
                            >

                            </PageHeader>

                            <p>September 2008 - May 2011</p>

                        </Card>

                </Drawer>

            </Col>

      </Row>
    
    </>
  );
       
      
    
};

export default About;