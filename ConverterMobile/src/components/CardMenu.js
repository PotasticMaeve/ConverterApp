import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

class CardMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
            <TouchableOpacity 
                style={s.container} 
                activeOpacity={0.7}
                onPress={() => this.renderRoutes(this.props.name)}
            >
                <View style={{ height:'70%', width: '100%', borderRadius:15}}>
                    <Image
                        source={{ uri: this.props.image}}
                        style={{height: '100%', width: '100%', borderRadius:15}}
                    />
                </View>
                <View style={s.list}>
                    <Text style={{ fontSize:15 }}>{this.props.name}</Text>
                </View>         
            </TouchableOpacity>
        );
    }
}

const s = StyleSheet.create({
    container:{
        width: '43%',
        height: 180,
        margin: 10,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 40,
        opacity: .8,
        borderWidth: .1
    },
    textWrapper: {
        flex: .3,
        padding: 3,
    },
    titleText: {
        color: 'black',
        fontWeight: '400',
        letterSpacing: 1
    },
    list : {
        width : "100%",
        paddingVertical: 9,
        alignItems: 'center',
        justifyContent:'center',
        margin : 5,
        marginLeft: 0
    }
});

export default CardMenu;
