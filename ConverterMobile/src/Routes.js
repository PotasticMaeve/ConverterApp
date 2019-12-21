import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { 
  Router, 
  Scene,
} from 'react-native-router-flux';
import Home from './pages/Home';
import MainMenu from './pages/MainMenu';

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home"
          hideNavBar={true}
          component={Home}
          initial
        />
        <Scene
          key="MainMenu"
          component={MainMenu}
          title="Main Menu"
        />
      </Scene>
    </Router>
  );
}

export default Routes;
