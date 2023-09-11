import { StyleSheet, Dimensions } from "react-native";

var {width} = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        width: '50%'
    },
    list_container: {
        width: width/2,
        backgroundColor: 'white'
    }

})