import React from "react";

import  { Grommet, Sidebar, Main, Carousel, Grid } from 'grommet';
import SideBar from '../components/SideBar';
import About from '../pages/About';

import Portfolio from '../pages/Portfolio';

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
        {/* {location.pathname !== '/' &&  <SideBar gridArea="nav" /> } */}
        <SideBar gridArea="nav" />
        {/* {location.pathname === '/' && <TitlePage />} */}
     
       
      

        <Carousel gridArea="main"  fill>

          <About />

          <Portfolio />

        </Carousel>

      </Grid>
    )

}

export default MainCont;