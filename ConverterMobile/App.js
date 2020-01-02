import React, { Component } from 'react';
import Routes from './src/Routes';
import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  componentDidMount() {
    setTimeout(function(){
      SplashScreen.hide();
    }, 1000)
  }

  render() {
    return (
      <Routes />
    );
  }
}

export default App;
