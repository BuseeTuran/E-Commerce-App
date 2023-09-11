import React from "react";
import {  } from "react-native";
import { Badge, Text } from "native-base";

import { connect } from "react-redux";

import styles from "./CartIcon.style";


const CartIcon = (props) => {
    return (
        <>
        {props.cartItems.length ? (
            <Badge style={styles.badge}>
                <Text style={styles.text}>{props.cartItems.length} </Text>
            </Badge>
        ) : null}
    </>

    )
    
}

const mapStateToProps = (state) => {
    const {cartItems} = state;
    return {
        cartItems: cartItems
    }
}

export default connect(mapStateToProps)(CartIcon)