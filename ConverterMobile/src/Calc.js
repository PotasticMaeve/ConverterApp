import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Calc extends Component {    
    convert_jarak_table = function(dari, nilai){
        let base_val = {
            km  : 1000000,
            hm  : 100000,
            dam : 10000,
            m   : 1000,
            dm  : 100,
            cm  : 10,
            mm  : 1
        }
        let result = []
        let hasil = 0

        Object.keys(base_val).map((key, val) => {
            hasil = nilai * base_val[dari] / base_val[key]
            result.push(`${hasil} ${key}`)
        })  
        return result
    }

    convert_waktu_table = function(dari, nilai){
        let base_val = {
            bulan   : 259200,
            hari    : 86400,
            jam     : 3600,
            menit   : 60,
            s       : 1,
            ms      : 0.001
        }
        let result = []
        let hasil = 0

        Object.keys(base_val).map((key, val) => {
            hasil = nilai * base_val[dari] / base_val[key]
            result.push(`${hasil} ${key}`)
        })  
        return result
    }

    convert_massa_table = function(dari, nilai){
        let base_val = {
            ton     : 1000000,
            kwintal : 100000,
            kg      : 1000,
            hg      : 100,
            dag     : 10,
            g       : 1,
            dg      : 0.1,
            cg      : 0.01,
            mg      : 0.001
        }
        let result = []

        Object.keys(base_val).map((key, val) => {
            hasil = nilai * base_val[dari] / base_val[key]
            result.push(`${hasil} ${key}`)
        })  
        return result
    }

    convert_energi_table = function(dari, nilai){
        let base_val = {
            kwh     : 1000,
            joule   : 1,
            wh      : 1,
            kalori  : 4.2,
            erg     : 0.0000001
        }
        let result = []

        Object.keys(base_val).map((key, val) => {
            hasil = nilai * base_val[dari] / base_val[key]
            result.push(`${hasil} ${key}`)
        })  
        return result
    }

    convert_kecepatan_table = function(dari, nilai){
        let base_val = {
            km      : 0.277778,
            mile    : 3.6
        }
        let result = []

        Object.keys(base_val).map((key, val) => {
            hasil = nilai * base_val[dari] / base_val[key]
            result.push(`${hasil} ${key}`)
        })  
        return result
    }

    convert_temperatur_table = function(dari, nilai){
        let base_val = {
            celcius     : 5,
            reamur      : 4,
            fahrenheit  : 9,
            kelvin      : 1
        }
        let result = []

        Object.keys(base_val).map((key, val) => {
            hasil = nilai * base_val[dari] / base_val[key]
            result.push(`${hasil} ${key}`)
        })  
        return result
    }

    convert_gaya_table = function(dari, nilai){
        let base_val = {
            newton  : 100000,
            kgm     : 1,
            dyne    : 1
        }
        let result = []

        Object.keys(base_val).map((key, val) => {
            hasil = nilai * base_val[dari] / base_val[key]
            result.push(`${hasil} ${key}`)
        })  
        return result
    }

    convert_daya_table = function(dari, nilai){
        let base_val = {
            w     : 1,
            kw    : 1000,
            mw    : 1000000,
            gw    : 1000000000,
            hp    : 745.7
        }
        let result = []

        Object.keys(base_val).map((key, val) => {
            hasil = nilai * base_val[dari] / base_val[key]
            result.push(`${hasil} ${key}`)
        })  
        return result
    }
}

const convert = new Calc();    
export default convert;
