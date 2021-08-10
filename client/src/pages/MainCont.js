import React from "react";

import  { Carousel} from 'grommet';

import SideBar from '../components/SideBar';

import About from '../components/About';

import Skills from '../components/Skills'

import Portfolio from '../components/Portfolio';

import Education from '../components/Education'

import {  Row, Col } from 'antd';

function MainCont () {

  return (

    <Row justify="center">

      <Col span={3}>

        <SideBar/>

      </Col>

      <Col span={21}>

        <Carousel>

          <About />

          <Portfolio />

          <Skills />

          <Education />

        </Carousel>

      </Col>

    </Row>
    
  )

}

export default MainCont;