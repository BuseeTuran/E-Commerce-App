import React from "react";
import { View, Image, Text, Button } from "react-native";
import Toast from "react-native-toast-message";

import { connect } from "react-redux";
import * as actions from "../../../Redux/Actions/cartActions";

import styles from "./ProductCard.style";
import EasyButton from "../../../Shared/StyledComponents/EasyButton";

const ProductCard = (props) => {

    const {name, price, image, countInStock} = props;
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="contain" source={{uri: image ? image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}/>
            
            <View style={styles.bottom_card}>
                <Text style={styles.title}>
                    {name.length > 18 ? name.substring(0, 18-3)
                        + '...' : name
                    }
                </Text>
            </View>
            <View style={styles.footer_card}>
                <Text style={styles.price}>₺{price}</Text>

                {countInStock > 0 ? (
                    <View style={styles.stock}>
                        <EasyButton  
                            primary
                            medium
                            onPress={() => {
                                props.addItemToCart(props.id),
                                Toast.show({
                                    topOffset: 50,
                                    type: "success",
                                    text1: `${name} added to Cart`,
                                    text2: "Go to your cart to complete order"
                                })
                            }}
                        >
                            <Text style={{color: "white"}}>Add</Text>
                        </EasyButton>
                    </View>
                ) : <Text style={styles.stock_text}>Currently Unavailable</Text>}
            </View>
            
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => 
            dispatch(actions.addToCart({quantity: 1, product}))
    }
}

export default connect(null, mapDispatchToProps)(ProductCard)