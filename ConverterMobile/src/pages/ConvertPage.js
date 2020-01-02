import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Picker, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Table, Row, Rows } from 'react-native-table-component';
import s from '../stylesheets/MainStyle';
import convert from '../Calc';

class Jarak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: "",
      // from: this.props.satuan[0].value,
      from : '',
      val: 0,
      tableHead: ['No', 'Nilai', 'Satuan'],
      tableData: [],
      widthArr: [40, 200, 88],
      choosenItem: '', 
    };

    this.routePage = this.routePage.bind(this);
    this.change_Dropdown_value = this.change_Dropdown_value.bind(this);
    this.change_text_value = this.change_text_value.bind(this);
  }

  routePage(myfrom, myval){
    // let mybody = JSON.stringify({
    //     from  : myfrom,
    //     val   : myval
    // })

    // let myheader = {
    //   'Accept':       'application/json',
    //   'Content-Type': 'application/json',
    // }

    // return fetch(`http://68.183.190.242:1282/${this.props.endpoint}`, {method: 'POST', body: mybody, headers: myheader} )
    // .then( (response) => response.json() )
    // .then( json => {
    //   this.setState({hasil: json.hasil})

    //   this.setState({tableData: []})

    //   this.state.hasil.map( (item, key) => (
    //     this.result = item.split(" "),
    //     this.setState(prev_state => ({tableData: [...prev_state.tableData, [key+1, this.result[0], this.result[1]]] }))
    //   ))
    // })
    // ------------------------------------------------------------------------------------------------

    // if(this.props.title == 'Jarak'){ hasil = convert.convert_jarak_table(myfrom,myval) }
    
    this.setState({hasil: convert.convert_waktu_table("jam", 2) }) 
    this.setState({tableData: []})

    this.state.hasil.map( (item, key) => (
      this.result = item.split(" "),
      this.setState(prev_state => ({tableData: [...prev_state.tableData, [key+1, this.result[0], this.result[1]]] }))
    ))
    
  }

  change_Dropdown_value(val){

    this.setState({choosenItem: val})
    this.setState({from: val})

    this.routePage(val, this.state.val)

    if (this.state.hasil.indexOf("NaN") > -1) {
      this.routePage()
    }
  }

  change_text_value(value){
    this.setState({val: value})
  }

  render() {    
    return (
      <View style={s.contConvert}>
        <View style={s.navBar}>

          <View style={s.navbarContent}>
            <View style={s.iconNav}>
              <TouchableOpacity activeOpacity={.7} onPress={() => Actions.pop()}>
                <Icon
                  name="chevron-left"
                  type="Entypo"
                  color="#fafafa"
                  size={28}
                />
              </TouchableOpacity>
            </View>
            <View style={s. titleCont}>
              <Text style={s.titleContent}>{ this.props.title }</Text>
            </View>
          </View>

        </View>
        <View style={{ flex: 9}}> 
          <View style={s.contField}>
            <Text style={s.textContent} >Nilai :</Text>
            <View style={s.textField}>
              <TextInput 
                onChangeText={ (value) => this.change_text_value(value)}
                keyboardType="number-pad"
                style={s.inputNilai}
                selectionColor='#b2bec3'
                defaultValue="0"
              />
            </View>
          </View>
          <View style={s.contField}>
              <Text style={[s.textContent,{marginRight: 19}]} >Dari :</Text>
              <View style={s.textField}>
                <Picker
                  selectedValue={this.state.choosenItem}
                  style={s.pickerItem}
                  onValueChange={
                    (satuan) => this.change_Dropdown_value(satuan)
                  }
                  >

                    {this.props.satuan.map( (item, key) => (
                      <Picker.Item key={key} label={item.value} value={item.value} />  
                    ))}

                </Picker>
              </View>
          </View>
            
            <View style={s.tableCont}>
              <Table borderStyle={s.borderTable}>
                <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={s.head} textStyle={s.text}/>
                <Rows data={this.state.tableData} widthArr={this.state.widthArr} textStyle={s.text}/>
              </Table>
          </View>
        </View>

      </View>
    );
  }
}

export default Jarak;
