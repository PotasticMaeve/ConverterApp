import React, { Component } from 'react';
import { 
  Router, 
  Scene,
} from 'react-native-router-flux';

import Home from './pages/Home';
import MainMenu from './pages/MainMenu';
import ConvertPage from './pages/ConvertPage';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home"
          component={Home}
          hideNavBar
          initial
        />
        <Scene
          key="MainMenu"
          component={MainMenu}
          title="Main Menu"
          hideNavBar
        />
        <Scene key="ConvertPage" component={ConvertPage}/>
      </Scene>
    </Router>
  );
}

export default Routes;
