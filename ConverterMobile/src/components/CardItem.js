import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
export default class CardItem extends Component {
    constructor(props) {
        super(props);
    }

    renderTitle(){
        if(this.props.name.length > 10){
            return <Text style={[s.title, {fontSize: 24}]}>{this.props.name}</Text>
        } else {
            return <Text style={s.title}>{this.props.name}</Text>
        }
    }

    renderRoutes(window_name){
        if(window_name == 'Jarak'){Actions.Jarak()}
        if(window_name == 'Kecepatan'){Actions.Kecepatan()}
        if(window_name == 'Waktu'){Actions.Waktu()}
        if(window_name == 'Massa'){Actions.Massa()}
        if(window_name == 'Temperatur'){Actions.Temperatur()}
        if(window_name == 'Energi'){Actions.Energi()}
        if(window_name == 'Daya'){Actions.Daya()}
        if(window_name == 'Gaya'){Actions.Gaya()}
        if(window_name == 'Intensitas Cahaya'){Actions.IntenCahaya()}
        if(window_name == 'Jumlah Zat'){Actions.JumlahZat()}
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