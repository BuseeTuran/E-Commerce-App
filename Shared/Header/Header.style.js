import { StyleSheet, Dimensions } from "react-native";

var {width} = Dimensions.get('window');

export default StyleSheet.create({
    header: {
        height: '7%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: "center",
        bottom: 35,
       
        
    },
    logo: {
        
        height: width / 2.8,
        
    }
})