import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import LinearGradient from 'react-native-linear-gradient';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar backgroundColor='#0189f1'/>
        <View style={s.buttonContainer}>
          <TouchableOpacity 
            style={{ width: '100%', borderRadius: 40, borderWidth: .1, height: 50, backgroundColor:'#841584'}} 
            onPress={() => Actions.MainMenu()} 
            activeOpacity={0.7}
          >
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={s.linearGradient}>
              <Text style={s.buttonText}>
                Get Started
              </Text>
            </LinearGradient>              
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'flex-end',
   backgroundColor:'#0189f1',
  },
  buttonContainer: {
    margin: 70,
    marginBottom: 80
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
});


export default Home;
