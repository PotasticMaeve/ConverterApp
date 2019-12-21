import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Jarak extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignContent: 'center', backgroundColor: 'green'}}>
        <Text> Jarak </Text>
      </View>
    );
  }
}

export default Jarak;
