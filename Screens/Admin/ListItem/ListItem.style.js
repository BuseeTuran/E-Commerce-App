import { StyleSheet, Dimensions } from "react-native";

var {width, height} = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 6,
        width: width,
        alignItems: 'center'
    },
    image: {
        borderRadius: 5,
        width: width / 8,
        margin: 2,
        height: height / 12
    },
    item: {
        flexWrap: "wrap",
        margin: 8,
        width: width / 5.3,
        left: 6
    },
    centered_view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modal_view: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    text_style: {
        color: "white",
        fontWeight: "bold"
    }
})