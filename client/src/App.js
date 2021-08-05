import React from "react";

import Routes from "./Routes.js";

import NavBar from "./components/NavTabs"

import FooterComp from "./components/FooterComp"

import './App.css';

function App() {
  
  return (

    <>

      <NavBar />

      <Routes />

      <FooterComp />

    </>

  );

}

export default App;