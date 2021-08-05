import React from 'react';

import { Route, Switch } from "react-router-dom";

import About from "./pages/About";

import Portfolio from "./pages/Portfolio";

import TitlePage from './pages/TitlePage';

import MainCont from './components/MainCont'

const Routes = () => (
  
    <Switch>

        

        <Route exact path ="/main" component={MainCont} />

        <Route exact path ="/" component={TitlePage}  />

        <Route component={MainCont}  />

    </Switch>
   
)

export default Routes;