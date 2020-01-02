import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import LinearGradient from 'react-native-linear-gradient';
import s from '../stylesheets/MainStyle';


class Home extends Component {
  render() {
    return (
      <View style={s.contHome}>
        <StatusBar style={s.statusBar}/>
        <View style={s.imageCont}>
          <Image source={require('../../assets/img/unindra.png')} style={s.logo}/>
        </View>
        <View style={s.buttonContHome}>
          <TouchableOpacity 
            style={s.readyButton} 
            onPress={() => Actions.MainMenu()} 
            activeOpacity={0.7}
          >
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={s.textReadyButton}>
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

export default Home;
