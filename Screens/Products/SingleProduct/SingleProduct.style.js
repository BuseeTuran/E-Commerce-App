import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%'
    },
    scrollview: {
        marginBottom: 80,
        padding: 5
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 350
    },
    content_container: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content_header: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 20
    },
    content_text: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 20
    },
    bottom_container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: '#FDABE0'
    },
    availability_container: {
        marginBottom: 20,
        alignItems: "center"
    },
    availability: {
        flexDirection: 'row',
        marginBottom: 10,
    }
})