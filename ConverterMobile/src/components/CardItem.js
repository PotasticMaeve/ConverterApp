import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
export default class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    renderTitle(){
        if(this.props.name.length > 10){
            return <Text style={[s.title, {fontSize: 24}]}>{this.props.name}</Text>
        } else {
            return <Text style={s.title}>{this.props.name}</Text>
        }
    }


    renderRoutes(window_name){
        if(window_name == 'Jarak'){Actions.ConvertPage({endpoint: "jarak", satuan: [{value: 'km',}, {value: 'hm',}, {value: 'dam',}, {value: 'm',}, {value: 'dm',}, {value: 'cm',}, {value: 'mm'}] })}
        if(window_name == 'Kecepatan'){Actions.ConvertPage({endpoint: "kecepatan", satuan: [{value: 'km/jam',}, {value: 'm/s',}] })}
        if(window_name == 'Waktu'){Actions.ConvertPage({endpoint: "waktu", satuan: [{value: 'bulan',}, {value: 'hari',}, {value: 'jam',}, {value: 'menit',}, {value: 's',}, {value: 'ms',}] })}
        if(window_name == 'Massa'){Actions.ConvertPage({endpoint: "massa", satuan: [{value: 'ton',}, {value: 'kwintal',}, {value: 'kg',}, {value: 'hg',}, {value: 'dag',}, {value: 'g',}, {value: 'dg'}, {value: 'cg',}, {value: 'mg'}] })}
        if(window_name == 'Temperatur'){Actions.ConvertPage({endpoint: "temperatur", satuan: [{value: 'C',}, {value: 'R',}, {value: 'F',}, {value: 'K',}] })}
        if(window_name == 'Energi'){Actions.ConvertPage({endpoint: "energi", satuan: [{value: 'kwh',}, {value: 'joule',}, {value: 'wh',}, {value: 'kalori',}, {value: 'erg',}] })}
        if(window_name == 'Daya'){Actions.ConvertPage({endpoint: "daya", satuan: [{value: 'bulan',}, {value: 'hari',}, {value: 'jam',}, {value: 'menit',}, {value: 's',}, {value: 'ms',}] })}
        if(window_name == 'Gaya'){Actions.ConvertPage({endpoint: "gaya", satuan: [{value: 'newton',}, {value: 'kgm/s2',}, {value: 'dyne',}] })}
        if(window_name == 'Intensitas Cahaya'){Actions.ConvertPage({endpoint: "intensitas", satuan: [{value: 'bulan',}, {value: 'hari',}, {value: 'jam',}, {value: 'menit',}, {value: 's',}, {value: 'ms',}] })}
        if(window_name == 'Jumlah Zat'){Actions.ConvertPage({endpoint: "jumlahzat", satuan: [{value: 'bulan',}, {value: 'hari',}, {value: 'jam',}, {value: 'menit',}, {value: 's',}, {value: 'ms',}] })}
    }

    render() {
        return (            
            <View style={s.root}>
                <LinearGradient useAngle angle={40} colors={this.props.colors} style={[s.cont]}>
                    <TouchableOpacity onPress={() => this.renderRoutes(this.props.name)} activeOpacity={0.7}>
                        <View style={{ width: '100%', height: "100%", flexDirection: 'row' }}>
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

const s = StyleSheet.create({
    root: {
        flex: 1,
        height: 100,
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 10
    },
    cont: {
        flex: 1,
        height: "90%",
        width: "90%",
        elevation: 4,
        borderRadius: 10,
        shadowOpacity: 0.4,
        shadowOffset: {
            height: 2,
            width: 2
        }
    },
    imgCont: {
        width: "20%",
        height: "50%",
        marginVertical: "5%",
        marginHorizontal: "5%"
    },
    img: {
        resizeMode: 'contain',
        width: "100%",
        height: "100%"
    },
    textCont: {
        width: "65%",
        marginLeft: "5%",
        height: "100%",
        position: 'relative'
    },
    title: {
        fontFamily: 'Nunito-Bold',
        color: "#fafafa",
        fontSize: 28,
        marginTop: "5%"
    },
    subtitle: {
        position: 'absolute',
        bottom: 15,
        fontSize: 16,
        fontFamily: 'Nunito-Black',
        color: "#fafafa",
    }
});