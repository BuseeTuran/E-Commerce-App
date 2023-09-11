import { StyleSheet, Dimensions } from "react-native";

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        height: height,
        padding: 8,
        alignContent: 'center',
        backgroundColor: 'white'
    },
    header_container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    lower_container: {
        borderWidth: 1,
        borderColor: '#FDABE0'
    },
    title: {
        alignSelf: 'center',
        margin: 8,
        fontSize: 16,
        fontWeight: 'bold'
    },
    shipping_container: {
        padding: 8
    },
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        width: width / 1.2
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row',

    },
    button: {
        alignItems: 'center',
        margin: 20
    }
})