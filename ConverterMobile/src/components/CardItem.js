import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import s from '../stylesheets/MainStyle';

export default class CardItem extends Component {
    renderTitle(){
        if(this.props.name.length > 10){
            return <Text style={[s.title, {fontSize: 24}]}>{this.props.name}</Text>
        } else {
            return <Text style={s.title}>{this.props.name}</Text>
        }
    }


    renderRoutes(window_name){
        if(window_name == 'Jarak'){Actions.ConvertPage({title: 'Jarak', endpoint: "convert_jarak_table", satuan: [{value: 'km',}, {value: 'hm',}, {value: 'dam',}, {value: 'm',}, {value: 'dm',}, {value: 'cm',}, {value: 'mm'}] })}
        if(window_name == 'Kecepatan'){Actions.ConvertPage({title: 'Kecepatan', endpoint: "convert_kecepatan_table", satuan: [{value: 'km',}, {value: 'mile',}] })}
        if(window_name == 'Waktu'){Actions.ConvertPage({title: "Waktu", endpoint: "convert_waktu_table", satuan: [{value: 'bulan',}, {value: 'hari',}, {value: 'jam',}, {value: 'menit',}, {value: 's',}, {value: 'ms',}] })}
        if(window_name == 'Massa'){Actions.ConvertPage({title: "Massa", endpoint: "convert_massa_table", satuan: [{value: 'ton',}, {value: 'kwintal',}, {value: 'kg',}, {value: 'hg',}, {value: 'dag',}, {value: 'g',}, {value: 'dg'}, {value: 'cg',}, {value: 'mg'}] })}
        if(window_name == 'Temperatur'){Actions.ConvertPage({title: "Temperatur", endpoint: "convert_temperatur_table", satuan: [{value: 'celcius',}, {value: 'reamur',}, {value: 'fahrenheit',}, {value: 'kelvin',}] })}
        if(window_name == 'Energi'){Actions.ConvertPage({title: "Energi", endpoint: "convert_energi_table", satuan: [{value: 'kwh',}, {value: 'joule',}, {value: 'wh',}, {value: 'kalori',}, {value: 'erg',}] })}
        if(window_name == 'Daya'){Actions.ConvertPage({title: "Daya", endpoint: "convert_daya_table", satuan: [{value: 'w',}, {value: 'kw',}, {value: 'mw',}, {value: 'gw',}, {value: 'hp',}] })}
        if(window_name == 'Gaya'){Actions.ConvertPage({title: "Gaya", endpoint: "convert_gaya_table", satuan: [{value: 'newton',}, {value: 'kgm',}, {value: 'dyne',}] })}
        if(window_name == 'Intensitas Cahaya'){Actions.ConvertPage({title: "Intensitas Cahaya", endpoint: "convert_intensitas_table", satuan: [{value: 'bulan',}, {value: 'hari',}, {value: 'jam',}, {value: 'menit',}, {value: 's',}, {value: 'ms',}] })}
        if(window_name == 'Jumlah Zat'){Actions.ConvertPage({title: "Jumlah Zat", endpoint: "convert_jumlahzat_table", satuan: [{value: 'bulan',}, {value: 'hari',}, {value: 'jam',}, {value: 'menit',}, {value: 's',}, {value: 'ms',}] })}
    }

    render() {
        return (            
            <View style={s.root}>
                <LinearGradient useAngle angle={40} colors={this.props.colors} style={[s.cont]}>
                    <TouchableOpacity onPress={() => this.renderRoutes(this.props.name)} activeOpacity={0.7}>
                        <View style={s.cardCont}>
                            <View style={s.imgCont}>
                                <Image source={this.props.image} style={s.img} resizeMode="contain" />
                            </View>
                            <View style={s.textCont}>
                                {this.renderTitle()}
                                <Text style={s.subtitle}>Satuan standar ({this.props.subtitle})</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
}

