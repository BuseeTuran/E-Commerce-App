import { StyleSheet, Dimensions } from "react-native";

var {height} = Dimensions.get('window');

export default StyleSheet.create({
    search_container: {
       height: height / 16,
       backgroundColor: 'white',
       borderWidth: 1,
       width: height / 2.1,
       alignSelf: 'center',
       borderRadius: 10,
       top: 2,
       margin: 5
        
    },
    container: {
        flexWrap: "wrap",
        backgroundColor: 'white',
        
    },
    listContainer: {
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        flexWrap: "wrap",
        backgroundColor: "white",
        bottom: 5,
        

    },
    center: {
        justifyContent:'center',
        alignItems: 'center',
        height: height / 2
        
    },

})