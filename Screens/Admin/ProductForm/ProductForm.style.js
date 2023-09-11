import { StyleSheet } from "react-native";

export default StyleSheet.create({
    label: {
        width: "80%",
        marginTop: 10,
    },
    button_container: {
        width: "80%",
        marginBottom: 80,
        marginTop: 20,
        alignItems: 'center'
    },
    button_text: {
        color: 'white'
    },
    image_container: {
        width: 200,
        height: 200,
        borderStyle: "solid",
        borderWidth: 8,
        padding: 0,
        justifyContent: "center",
        borderRadius: 100,
        borderColor: "#E0E0E0",
        elevation: 10
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
        backgroundColor: "white"
    },
    image_picker: {
        position: "absolute",
        right: 5,
        bottom: 5,
        backgroundColor: "grey",
        padding: 8,
        borderRadius: 100,
        elevation: 20
    }

})