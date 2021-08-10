import React from 'react';

import { Route, Switch } from "react-router-dom";

import TitlePage from './pages/TitlePage';

import MainCont from './pages/MainCont'

const Routes = () => (
  
    <Switch>

        <Route exact path ="/main" component={MainCont} />

        <Route exact path ="/" component={TitlePage}  />

        <Route component={MainCont}  />

    </Switch>
   
)

export default Routes;