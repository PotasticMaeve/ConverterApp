import React, { Component } from 'react';
import { View } from 'react-native';
import Routes from './src/Routes';

class App extends Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Routes />
      </View>
    );
  }
}

export default App;
