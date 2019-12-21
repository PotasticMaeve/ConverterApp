import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CardMenu from '../components/CardMenu';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      name:''
    };
  }

  renderItem(a){
    var el = [];
        el.push(
          <CardMenu name={a} isLoading={true}/>
        )
    return el;
  }

  render() {
    return (
      <View style={s.container}>
        <ScrollView style={s.scrollStyle} showsVerticalScrollIndicator={false}>
          <View style={s.listMenu}>
            {this.renderItem('Jarak')} 
            {this.renderItem('Kecepatan')} 
            {this.renderItem('Waktu')} 
            {this.renderItem('Massa')} 
            {this.renderItem('Temperatur')} 
            {this.renderItem('Energi')} 
            {this.renderItem('Daya')} 
            {this.renderItem('Gaya')} 
            {this.renderItem('Intensitas Cahaya')} 
            {this.renderItem('Jumlah Zat')} 
          </View>
        </ScrollView>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
  },
  scrollStyle:{
    paddingHorizontal: 5,
    paddingBottom: 10,
    width: "100%", 
    height: 'auto'
  },
  listMenu:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: 100,
    paddingTop: 6,
  }
})


export default MainMenu;
