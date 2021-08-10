import React from "react";

import Routes from "./Routes.js";

import  { Grommet } from 'grommet';

import './App.css';

const App = () => {
  
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