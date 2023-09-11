import React, {useState, useEffect} from "react";
import { Image, View, Text, ScrollView, Button  } from "react-native";
import { Left, Right, Container, H1 } from "native-base";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import { connect } from "react-redux";
import * as actions from "../../../Redux/Actions/cartActions";

import styles from "./SingleProduct.style";
import EasyButton from "../../../Shared/StyledComponents/EasyButton";
import TrafficLight from "../../../Shared/StyledComponents/TrafficLight";

const SingleProduct = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');
    const [availabilityText, setAvailabilityText] = useState("");

    useEffect(() => {
        if(props.route.params.item.countInStock == 0) {
            setAvailability(<TrafficLight unavailable></TrafficLight>);
            setAvailabilityText("Unavailable")
        } else if (props.route.params.item.countInStock <= 5) {
            setAvailability(<TrafficLight limited></TrafficLight>);
            setAvailabilityText("Limited Stock")
        } else {
            setAvailability(<TrafficLight available></TrafficLight>);
            setAvailabilityText("Available")
        }

        return () => {
            setAvailability(null);
            setAvailabilityText("");
        }
    }, [])

    return (
        <Container style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <View style={styles.imageContainer}>
                    <Image  
                        source={{
                            uri: item.image ? item.image 
                            : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'         
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>
                <View style={styles.content_container}>
                    <H1 style={styles.content_header}>{item.name}</H1>
                    <Text style={styles.content_text}>{item.brand}</Text>
                </View>
                <View style={styles.availability_container}>
                    <View style={styles.availability}>
                        <Text style={{marginRight: 10}}>
                            Availability: {availabilityText}
                        </Text>
                        {availability}
                    </View>
                    <Text>{item.description}</Text>
                </View>

            </ScrollView>
            <View style={styles.bottom_container}>
                <Left>
                    <Text style={styles.price}>{item.price} TL</Text>
                </Left>
                <Right>
                    <EasyButton 
                        primary
                        medium
                        onPress={() => {props.addItemToCart(item.id),
                            Toast.show({
                                topOffset: 60,
                                type: "success",
                                text1: `${item.name} added to Cart`,
                            })
                        }}
                    >
                        <Text style={{color:'white'}}>Add</Text>
                    </EasyButton>
                </Right>

            </View>

        </Container>
    )
}

const mapToDispatchToProps = (dispatch) => {
    return {
        addItemToCart:  (product) =>
            dispatch(actions.addToCart({quantity: 1, product}))
    }
}

export default connect(null, mapToDispatchToProps)(SingleProduct)