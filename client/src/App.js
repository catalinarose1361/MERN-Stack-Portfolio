import React from "react";

import Routes from "./Routes.js";

import  { Grommet } from 'grommet'

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

      <Routes />

    </Grommet>

  );

}

export default App;