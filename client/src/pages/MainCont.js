import React from "react";

import  { Carousel, Grid } from 'grommet';
import SideBar from '../components/SideBar';
import About from '../components/About';
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio';
import Education from '../components/Education'
function MainCont () {
    return (

        <Grid
        rows={['xxsmall', 'xsmall']}
        columns={['xsmall', 'small']}
        gap="small"
        areas={[
   
          { name: 'nav', start: [2, 0], end: [2, 0] },
          { name: 'main', start: [1, 0], end: [1, 0] },
        ]}
      >
        
        <SideBar gridArea="nav" />
        
     
       
      

        <Carousel gridArea="main"  fill>

          <About />

          <Portfolio />

          <Skills />
          <Education />

        </Carousel>

      </Grid>
    )

}

export default MainCont;