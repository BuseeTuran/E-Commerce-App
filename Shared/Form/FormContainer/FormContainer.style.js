import { StyleSheet, Dimensions } from "react-native";

var {width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 400,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
    }
})