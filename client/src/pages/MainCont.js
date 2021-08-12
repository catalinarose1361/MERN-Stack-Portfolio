import React from "react";

import  { Carousel, InfiniteScroll} from 'grommet';

import SideBar from '../components/SideBar';

import About from '../components/About';

import Skills from '../components/Skills'

import Portfolio from '../components/Portfolio';

import Education from '../components/Education'

import {  Row, Col } from 'antd';

function MainCont () {

  return (

    <Row gutter={20} justify="center">

      <Col span={2}>

        <SideBar/>

      </Col>

      <Col span={22}>
      
        <Carousel margin="large" play={10000}  fill> 

           <About />

          <Skills />

          <Education /> 

          <Portfolio />

        </Carousel>

      </Col>

    </Row>
    
  )

}

export default MainCont;