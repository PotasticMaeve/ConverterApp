
import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    // HOME
    contHome: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor:'#0189f1',
    },
    buttonContHome: {
        margin: 70,
        marginBottom: 80
    },
    textReadyButton: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    readyButton: { 
        width: '100%', 
        borderRadius: 40, 
        borderWidth: .1, 
        height: 50, 
        backgroundColor:'#841584'
    },
    statusBar : {
        backgroundColor:'#0189f1'
    },
    imageCont : {
        width: 300, 
        height: 500, 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin:30 
    },
    logo : {
        width: 170, 
        height: 170, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    // MAIN MENU
    contMenu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
    },
    scrollStyle: {
        paddingHorizontal: 5,
        paddingBottom: 10,
        width: "100%",
        height: 'auto',
        zIndex: 2
    },
    listMenu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        paddingBottom: 100,
        paddingTop: 6,
    },
    textBold: {
        fontFamily: "Nunito-Bold"
    },
    textReguler: {
        fontFamily: 'Nunito-Reguler'
    },
    titleMenu : {
        flexDirection: "row", 
        marginLeft: "27%"
    },
    clearSpace : {
        height: 100, 
        width: "100%"
    },

    // CONVERT PAGE
    contConvert: {
        flex:1,
        height: "20%",
        width: "100%",
      }, 
    textBox: {
        width: "92%",
        height: '80%',
        paddingHorizontal: 20,
        paddingVertical: 9,
        borderWidth: .4,
        margin: 14.5,
        borderRadius: 14,
        backgroundColor: '#30336b'
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent'    
    },
    navBar: {
        flex:1,
        height: 20,
        width: "100%"
    },
    textField: {
        height: 45,
        width: "74%",
        borderWidth: .4,
        margin: 6,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    iconNav: {
        flex: 0.12,
        backgroundColor :'#0189f1',
        paddingTop : 12,
        height: 50,
        paddingHorizontal: 10
    },
    inputNilai: {
        marginHorizontal: 8,
        fontSize: 15,
    },
    head: { 
        height: 40, 
        backgroundColor: '#f1f8ff' 
    },
    text: { 
        textAlign: 'center', 
        fontWeight: '100',
        fontSize: 15 
    },
    row: { 
        height: 40, 
        backgroundColor: '#E7E6E1' 
    },
    contField: {  
        flexDirection: 'row', 
        alignItems: 'center'
    },
    navbarContent : { 
        flexDirection: 'row', 
        backgroundColor: '#0189f1'
    },
    titleCont : {
        flex:.78, 
        paddingVertical: 12, 
        paddingHorizontal: 10
    },
    titleContent : { 
        fontSize: 20,
        color: 'white'
    },
    textContent : { 
        fontSize: 17, 
        marginTop: 20, 
        margin: 15
    },
    pickerItem : {
        height: 50, 
        width: '100%'
    },
    tableCont : { 
        flex: 7, 
        padding : 15
    },
    borderTable : {
        borderWidth: 2, 
        borderColor: '#c8e1ff'
    },

    // CARD ITEM
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
    },
    cardCont : {
        width: '100%', 
        height: "100%", 
        flexDirection: 'row'
    }


});

export default Style