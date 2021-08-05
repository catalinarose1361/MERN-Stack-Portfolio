import React from "react";

// import Routes from "./Routes.js";

import  { Grommet, Sidebar, Main, Carousel, Grid } from 'grommet'

import SideBar from './components/SideBar'

import About from './pages/About';

import Portfolio from './pages/Portfolio';

// import NavBar from "./components/NavTabs"

// import FooterComp from "./components/FooterComp"

import './App.css';


function App() {
  
  return (

    <Grommet

      theme={{ global: { 

        colors: { doc: '#ff99cc' } 

        }

      }}
  
    >
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
        <Main gridArea="main" pad="large">

          <Carousel fill>

            <About />
            <Portfolio />

          </Carousel>

        </Main>
</Grid>

     

        

  
        

   
       
      

     

    </Grommet>

  );

}

export default App;