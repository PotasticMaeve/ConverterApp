import React, { Component } from 'react';
import { BackHandler } from "react-native";
import { 
  Router, 
  Scene,
  Actions
} from 'react-native-router-flux';

import Home from './pages/Home';
import MainMenu from './pages/MainMenu';
import ConvertPage from './pages/ConvertPage';
import Calc from './Calc';

class Routes extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
  }
  handleBackButton(){
    if(Actions.currentScene == 'Home'){
      BackHandler.exitApp();
    }
  }
  render(){
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
          <Scene 
            key="ConvertPage" 
            component={ConvertPage} 
            hideNavBar
          />
          <Scene 
            key="Calc" 
            component={Calc} 
            hideNavBar
          />
        </Scene>
      </Router>
    )
  }
}

export default Routes;
