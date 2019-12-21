import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Picker} from 'react-native';
import { Actions } from 'react-native-router-flux';

class CardMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={s.container}>
                <View style={{ height:'70%', width: '100%', backgroundColor: 'grey', borderRadius:15}}>
                    <Image source={this.props.image}/>
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
        shadowRadius: 40
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
        marginLeft:1
    }
});

export default CardMenu;
