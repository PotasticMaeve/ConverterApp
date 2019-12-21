import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CardMenu from '../components/CardMenu';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      name:'',
      images: ''
    };
  }

  renderItem(name, image_uri){
    var el = [];
      el.push(
        <CardMenu name={name} isLoading={true} image={image_uri}/>
      )
    return el;
  }

  render() {
    return (
      <View style={s.container}>
        <ScrollView style={s.scrollStyle} showsVerticalScrollIndicator={false}>
          <View style={s.listMenu}>
            {this.renderItem('Jarak', 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg')} 
            {this.renderItem('Kecepatan', 'https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-field.jpg')} 
            {this.renderItem('Waktu', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIe05IvxnGnh4cGpF8yBqzTd-nuADAAMFjqEM4jFVY3OR4yLGF&s')} 
            {this.renderItem('Massa', 'https://i.ytimg.com/vi/Ep3jK1bZrB8/maxresdefault.jpg')} 
            {this.renderItem('Temperatur', 'https://i.ytimg.com/vi/acm9dCI5_dc/maxresdefault.jpg')} 
            {this.renderItem('Energi', 'http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg')} 
            {this.renderItem('Daya', 'http://pm1.narvii.com/6204/abf8e37ea9d7150c31da171f13306b81dbdffef4_00.jpg')} 
            {this.renderItem('Gaya', 'https://66.media.tumblr.com/783c607ca8797560e9ec06f9039a6fc7/tumblr_mracd2ZMg01r45099o1_400.jpg')} 
            {this.renderItem('Intensitas Cahaya', 'https://i.ytimg.com/vi/WBnqQaUCM1M/hqdefault.jpg')} 
            {this.renderItem('Jumlah Zat', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmlGCC998PgixbGsecr9_XKj2XOorRLGqZv_gwm5WVf5Xy7cS7w&s')} 
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
