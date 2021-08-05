import React from "react";

import Routes from "./Routes.js";
import { BrowserRouter as Router, withRouter } from "react-router-dom"
import  { Grommet, Sidebar, Main, Carousel, Grid, Box, InfiniteScroll, Text } from 'grommet';

import SideBar from './components/SideBar';

import MainCont from './components/MainCont';

import About from './pages/About';

import Portfolio from './pages/Portfolio';

// import NavBar from "./components/NavTabs"

// import FooterComp from "./components/FooterComp"

import './App.css';
import TitlePage from "./pages/TitlePage";


const App = ({ location }) => {
  
  return (

    <Grommet

      theme={{ global: { 

        colors: { doc: '#ff99cc' } 

        }

      }}
  
    >
       <Routes />
      
      {/* <Grid
        rows={['xxsmall', 'xsmall']}
        columns={['xsmall', 'small']}
        gap="small"
        areas={[
   
          { name: 'nav', start: [2, 0], end: [2, 0] },
          { name: 'main', start: [1, 0], end: [1, 0] },
        ]}
      >
        {/* {location.pathname !== '/' &&  <SideBar gridArea="nav" /> } */}
        {/* <SideBar gridArea="nav" /> */}
        {/* {location.pathname === '/' && <TitlePage />} */}
     
       
      

        {/* <Carousel gridArea="main"  fill> */}

          {/* <About /> */}

          {/* <Portfolio /> */}

        {/* </Carousel> */}

      {/* </Grid> */} 

    </Grommet>

  );

}
export default withRouter(App);