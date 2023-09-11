import { StyleSheet, Dimensions } from "react-native";

var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,

    },
    empty_container: {
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    H1: {
        alignSelf: "center",
    },
    bottom_container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        elevation: 20,
        right: 2,
        
        
    },
    price: {
        fontSize: 18,
        margin: 20,
        color: '#FDABE0'
    },
    hidden_container: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    hidden_button: {
        backgroundColor: '#FDABE0',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 67,
        width: width / 1.2
    }
})