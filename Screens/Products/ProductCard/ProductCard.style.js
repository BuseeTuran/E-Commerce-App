import { StyleSheet, Dimensions } from "react-native";

var {width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: width / 2 - 15,
        height: width / 1.2,
        padding: 10,
        borderRadius: 1,
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 5,
        alignItems: 'center',
        elevation: 0.5,
        backgroundColor: 'transparent',
        
    },
    image: {
        width: width / 1.9 ,
        height: width / 1.9 ,       
        position: 'absolute',
        top: 7
    },
    bottom_card: {
        top: 190,
    },
    footer_card: {       
        top: 190
    },
    title: {
        fontWeight: "500",
        fontSize: 15,
        textAlign: 'center',
        color: '#FDABE0'
    },
    price: {
        fontSize: 16,
        color: '#FDABE0',    
        fontWeight:'500',
        textAlign: 'center',
        
    },
    stock: {   
        bottom: -5
    },
    
    stock_text: {
        marginTop: 20,       
    }
    
})