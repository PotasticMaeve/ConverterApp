import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Input } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

class Jarak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: "",
      from: "",
      to: "",
      val: 0
    };
  }

  routePage(){
    let mybody = JSON.stringify({
      from: this.state.from,
      to: this.state.to,
      val: this.state.val
    })

    let myheader = {
      'Accept':       'application/json',
      'Content-Type': 'application/json',
    }

    return fetch(`http://68.183.190.242:1282/${this.props.endpoint}`, {method: 'POST', body: mybody, headers: myheader} )
    .then( (response) => response.json() )
    .then( json => {
      this.setState({hasil: json.hasil})
    })
  }

  fillFrom(val){
    this.setState({from: val})
  }

  fillTo(val){
    this.setState({to: val})
  }

  fillVal(value){
    this.setState({val: value})
  }

  render() {
    return (
      <View style={s.container}>
        <View style={s.textBox}>
          <Input
            placeholder='Nilai'
            onChangeText={ value => this.setState({val: value})}
          />
          <View style={{ width: "50%", height: "50%"}}>
            <Dropdown
              label='Dari'
              data={this.props.satuan}
              onChangeText={ val => this.setState({from: val})}
            />
            <Dropdown
              label='Ke'
              data={this.props.satuan}
              onChangeText={ val => this.setState({to: val})}
            />
            <Text>Hasil: { this.state.hasil }</Text>
          </View>
          <TouchableOpacity onPress={()=>this.routePage()} style={{ width: '40%', borderRadius: 10, borderWidth: .1, height: 50, backgroundColor: 'green' }} >
            <Text style={s.buttonText}>Hitung</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex:1,
    height: "20%",
    width: "100%",
    padding: 20
  }, 
  textBox: {
    flex:1,
    width: "100%",
    height: 'auto'
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  }

})

export default Jarak;
