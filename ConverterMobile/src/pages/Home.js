import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux'; 

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={s.container}>
        <View style={s.buttonContainer}>
          <TouchableOpacity style={{ width: '100%', borderRadius: 40, borderWidth: .1, height: 50, backgroundColor:'#841584'}} onPress={() => Actions.MainMenu()}>
            <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, marginVertical: 10, color: 'white', fontFamily:'' }}>Mulai</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}



const s = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'flex-end'
  },
  buttonContainer: {
    margin: 70,
    marginBottom: 80
  }
});


export default Home;
