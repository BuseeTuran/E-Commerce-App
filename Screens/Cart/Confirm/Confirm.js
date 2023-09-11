import React, { useState, useEffect } from "react";
import { View, ScrollView, Button } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import Toast from "react-native-toast-message";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { connect } from "react-redux";

import styles from "./Confirm.style";
import * as actions from "../../../Redux/Actions/cartActions";
import baseURL from "../../../assets/common/baseUrl";

const Confirm = (props) => {

    const finalOrder = props.route.params;

    const [productUpdate, setProductUpdate] = useState();
    const [token, setToken] = useState();

    useEffect(() => {
        if(finalOrder) {
            getProducts(finalOrder);
        }
        return () => {
            setProductUpdate();
        }
    }, [props])

    const getProducts = (x) => {
        const order = x.order.order;
        var products = [];
        if(order) {
            order.orderItems.forEach((cart) => {
                axios.get(`${baseURL}products/${cart.product}`)
                .then((data) => {
                    products.push(data.data);
                    setProductUpdate(products);
                })
                .catch((e) => {
                    console.log(e);
                })
            })
        }
    }



    const confirmOrder = () => {

        const order = finalOrder.order.order;

    
        axios.post(`${baseURL}orders`, order)
            .then((res) => {
                if(res.status == 200 || res.status == 201) {
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1: "Order Completed",
                        text2: "",
                    })
                    setTimeout(() => {
                        props.clearCart();
                        props.navigation.navigate('Cart')
                    }, 500)
                }
            }) 
            .catch((error) => {
                Toast.show({
                    topOffset: 60,
                    type: "error",
                    text1: "Something went wrong!",
                    text2: "Please try again",
                })
                console.log(error)
            })

        
    }


    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header}>Confirm Order</Text>
                {props.route.params ? (
                    <View style={styles.lower_container}>
                        <Text style={styles.title}>Shipping to:</Text>
                        <View style={styles.shipping_container}>
                            <Text>Address: {finalOrder.order.order.shippingAddress1}</Text>
                            <Text>Address2: {finalOrder.order.order.shippingAddress2}</Text>
                            <Text>City: {finalOrder.order.order.city}</Text>
                            <Text>Zip Code: {finalOrder.order.order.zip}</Text>
                            <Text>Country: {finalOrder.order.order.country}</Text>
                        </View>
                        <Text style={styles.title}>Items:</Text>
                        {productUpdate && (
                            <>
                            {productUpdate.map((x) => {
                            return (
                                <ListItem 
                                    style={styles.listItem} 
                                    key={x.name}
                                    avatar
                                >
                                    <Left>
                                        <Thumbnail source={{uri: x.image}} />
                                    </Left>
                                    <Body style={styles.body}>
                                        <Left>
                                            <Text>{x.name}</Text>
                                        </Left>
                                        <Right>
                                            <Text>₺{x.price} </Text>
                                        </Right>
                                    </Body>
                                </ListItem>
                            )
                        })}
                        </>
                        )}
                    </View> 
                ) : null}
                <View style={styles.button}>
                    <Button 
                        color={'#FDABE0'} 
                        title={"Place order"} 
                        onPress={confirmOrder}
                    />
                </View>
            </View>

        </ScrollView>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart())
    }
}

export default connect(null, mapDispatchToProps)(Confirm)