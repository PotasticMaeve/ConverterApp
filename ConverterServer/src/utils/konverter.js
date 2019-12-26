

exports.convert_jarak = function(dari, ke, nilai){
    base_val = {
        km  : 1000000,
        hm  : 100000,
        dam : 10000,
        m   : 1000,
        ds  : 100,
        cm  : 10,
        mm  : 1
    }
    
    hasil = nilai * base_val[dari] / base_val[ke]
    return `${hasil} ${ke}`
}

exports.convert_waktu = function(dari, ke, nilai){
    base_val = {
        bulan   : 259200,
        hari    : 86400,
        jam     : 3600,
        menit   : 60,
        detik   : 1,
        ms      : 0.001,
    }
    
    hasil = nilai * base_val[dari] / base_val[ke]
    return `${hasil} ${ke}`
}

exports.convert_massa = function(dari, ke, nilai){
    base_val = {
        ton     : 1000000,
        kwintal : 100000,
        kg      : 1000,
        hg      : 100,
        dag     : 10,
        g       : 1,
        dg      : 0.1,
        cg      : 0.01,
        mg      : 0.001,
    }
    
    hasil = nilai * base_val[dari] / base_val[ke]
    return `${hasil} ${ke}`
}

exports.convert_energi = function(dari, ke, nilai){
    base_val = {
        kwh     : 1000,
        joule   : 1,
        wh      : 1,
        kalori  : 4.2,
        erg     : 0.0000001
    }
    
    hasil = nilai * base_val[dari] / base_val[ke]
    return `${hasil} ${ke}`
}

exports.convert_kecepatan = function(dari, ke, nilai){
    base_val = {
        km : 0.277778,
        m  : 3.6
    }
    
    hasil = nilai * base_val[dari] / base_val[ke]
    return `${hasil} ${ke}`
}

exports.convert_temperatur = function(dari, ke, nilai){
    base_val = {
        c : 5,
        r : 4,
        f : 9,
        k : 1
    }
    
    if(base_val[ke] == 'r' || base_val[dari] == 'r'){
        hasil = nilai * base_val[ke] / base_val[dari]
    }
    if(base_val[ke] == 'f'){
        hasil = (nilai * base_val[ke] / base_val[dari]) + 32
    }
    if(base_val[dari] == 'f'){
        hasil = (nilai * base_val[ke] / base_val[dari]) - 32
    }
    if(base_val[ke] == 'k'){
        hasil = nilai * base_val[ke] + 273
    }
    if(base_val[dari] == 'k'){
        hasil = nilai - 273
    }
    return `${hasil} ${ke}`
}

exports.convert_gaya = function(dari, ke, nilai){
    base_val = {
        newton  : 100000,
        kgm2    : 1,
        dyne    : 1,
    }
    
    hasil = nilai * base_val[dari] / base_val[ke]
    return `${hasil} ${ke}`
}