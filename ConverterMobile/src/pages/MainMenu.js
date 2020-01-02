import React, { Component } from 'react';
import { View, Text, ScrollView, Animated, Dimensions } from 'react-native';
import CardItem from '../components/CardItem';
import LinearGradient from 'react-native-linear-gradient';
import s from '../stylesheets/MainStyle';

// COLORS
const blueGrad = ["#4facfe", "#02f1fe"];
const orangeGrad = ["#fda085", "#f6d365"];
const purpleGrad = ["#c571f5", "#f971ce"];
const redGrad = ["#ff0a45", "#ffa794"];
const purple2Grad = ["#b721ff", "#21d4fd"];
const greenGrad = ["#11998e", "#38ef7d"];
const yellowGrad = ["#fc4a1a", "#f7b733"];
const yellow2Grad = ["#F09819", "#EDDE5D"];
const skiesGrad = ["#0072ff", '#00c6ff'];
const bloodGrad = ["#DD2476", "#FF512F"];

// LOCAL IMAGE
const img_ruler = require('../../assets/img/ruler.png');
const img_speed = require('../../assets/img/speed.png');
const img_clock = require('../../assets/img/clock.png');
const img_scale = require('../../assets/img/scale.png');
const img_temp = require('../../assets/img/temprature.png');
const img_energy = require('../../assets/img/energy.png');
const img_power = require('../../assets/img/power.png');
const img_force = require('../../assets/img/force.png');
const img_light = require('../../assets/img/light.png');
const img_molecule = require('../../assets/img/molecule.png');

class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      name: '',
      images: '',
      headerHeight: 300,
      scrollTop: 150,
      textOpacity: 0
    };
  }

  renderItem(name, subtitle, image_uri, colors) {
    let el = <CardItem name={name} subtitle={subtitle} image={image_uri} colors={colors} />
    return el;
  }

  handlerScroll(e) {
    let headerHeight = 300 - parseInt(e);
    let scrollTop = 150;
    let textOpacity = e / 200;
    if(headerHeight > 300){
      headerHeight = 300;
      scrollTop = 150;
    } else if(headerHeight < 50) {
      headerHeight = 50;
      scrollTop = 50;
    } else {
      headerHeight = headerHeight;
      scrollTop = headerHeight / 2 > 50 ? headerHeight / 2: 50;
    }
    
    this.setState({
      headerHeight,
      scrollTop,
      textOpacity
    })
  }

  render() {
    return (
      <View style={s.contMenu}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: "-50%",
            height: this.state.headerHeight,
            width: "200%",
          }}
        >
          <LinearGradient style={{
            borderBottomLeftRadius: Dimensions.get('window').width,
            borderBottomRightRadius: Dimensions.get('window').width,
            zIndex: 1,
            width: "100%",
            height: "100%",
            shadowColor: "#333",
            shadowOpacity: 0.4,
            shadowOffset:{
              height: 4,
              width: 4
            },
          }} 
          colors={["#008af1", "#0062eb"]}
          >
            <View style={s.titleMenu}>
              <Text style={[s.textReguler, {fontSize: 30, color: "#fafafa"}]}>Konversi</Text>
              <Text style={[s.textBold, {fontSize: 30, color: "#fafafa", opacity: this.state.textOpacity}]}> Satuan</Text>
            </View>
            <Text style={[s.textBold, {marginBottom : 20,marginLeft: "27%", fontSize: 45, color: "#fafafa", opacity: 1 - this.state.textOpacity}]}>Satuan</Text>

          </LinearGradient>
        </Animated.View>
        <ScrollView style={[s.scrollStyle, { top: this.state.scrollTop }]} showsVerticalScrollIndicator={false} onScroll={(e) => { this.handlerScroll(e.nativeEvent.contentOffset.y) }}>
          {this.renderItem('Jarak', 'm', img_ruler, blueGrad)}
          {this.renderItem('Kecepatan', 'm/s', img_speed, orangeGrad)}
          {this.renderItem('Waktu', 's', img_clock, purpleGrad)}
          {this.renderItem('Massa', 'kg', img_scale, redGrad)}
          {this.renderItem('Temperatur', 'K', img_temp, purple2Grad)}
          {this.renderItem('Energi', 'Joule', img_energy, yellowGrad)}
          {this.renderItem('Daya', 'Watt', img_power, greenGrad)}
          {this.renderItem('Gaya', 'Newton', img_force, skiesGrad)}
          {this.renderItem('Intensitas Cahaya', 'Cd', img_light, yellow2Grad)}
          {this.renderItem('Jumlah Zat', 'mol', img_molecule, bloodGrad)}
          {/* ADDING CLEARFIX */}
          <View style={s.clearSpace}>

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MainMenu;
