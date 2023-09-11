import { StyleSheet, Dimensions } from "react-native";

var {width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    swiper: {
        width: width,
        alignItems: 'center',
        marginTop: 15
    },
    imageBanner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 5,
        marginHorizontal: 20
    },
    bottom_swiper: {
        height: width / 2,
    }
})