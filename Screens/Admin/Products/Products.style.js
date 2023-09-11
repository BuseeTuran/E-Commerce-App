import { StyleSheet, Dimensions } from "react-native";

var {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    item: {
        padding: 5,
    },
    list_header: {
        flexDirection: 'row',
        padding: 3,
        backgroundColor: 'gainsboro',
        justifyContent: 'space-between',
        
    },
    header_item: {
        margin: 3,
        width: width / 5,
        
    },
    spinner: {
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        marginBottom: 160,
        backgroundColor: 'white',

    },
    button_container: {
        margin: 20,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    button_text: {
        marginLeft: 4,
        color: 'white'
    }
})