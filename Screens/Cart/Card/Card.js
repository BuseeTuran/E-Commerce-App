import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Container, Text, Left, Right, H1 } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { SwipeListView } from "react-native-swipe-list-view";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { connect } from "react-redux";

import styles from "./Card.style";
import * as actions from "../../../Redux/Actions/cartActions";
import CartItem from "../CartItem/CartItem";
import EasyButton from "../../../Shared/StyledComponents/EasyButton";
import baseURL from "../../../assets/common/baseUrl";
import AuthGlobal from "../../../Context/store/AuthGlobal";

const Card = (props) => {

    const context = useContext(AuthGlobal);

    const [productUpdate, setProductUpdate] = useState();
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        getProducts()
        return () => {
            setProductUpdate()
            setTotalPrice()
        }
    }, [props])

    const getProducts = () => {
        var products = [];
        props.cartItems.forEach(cart => {
            axios.get(`${baseURL}products/${cart.product}`).then(data => {
                products.push(data.data)
                setProductUpdate(products)
                var total = 0;
                products.forEach(product => {
                    const price = (total += product.price)
                    setTotalPrice(price)
                })
            })
            .catch(e => {
                console.log(e)
            })
        })
    }



    return (
        <>
        {productUpdate ? (
            <Container>
                <H1 style={styles.H1}>Cart</H1>
                <SwipeListView
                    data={productUpdate}
                    renderItem={(data) => 
                        <CartItem item={data} />
                    }
                    renderHiddenItem={(data) => (
                        <View style={styles.hidden_container}>
                            <TouchableOpacity 
                                style={styles.hidden_button}
                                onPress={() => props.removeFromCart(data.item)}
                            >
                                <Icon name="trash" color={'white'} size={27} />
                            </TouchableOpacity>
                        </View>
                    )}
                    disableRightSwipe={true}
                    previewOpenDelay={3000}
                    friction={1000}
                    tension={40}
                    leftOpenValue={75}
                    stopLeftSwipe={75}
                    rightOpenValue={-75}
                />
                <View style={styles.bottom_container}>
                    <Left>
                        <Text style={styles.price}>₺{totalPrice}  </Text>
                    </Left>
                    <Right>
                        <EasyButton 
                            danger
                            medium
                            color={'#FDABE0'} 
                            onPress={() => props.clearCart()}
                        >
                            <Text style={{color: 'white', fontWeight: 'bold'}}>Clear</Text>
                        </EasyButton>
                    </Right>
                    <Right>
                        {context.stateUser.isAuthenticated ? (
                        <EasyButton 
                            primary
                            medium
                            onPress={() => props.navigation.navigate('Checkout')}
                        >
                            <Text style={{ fontWeight: 'bold', color: 'white'}}>Checkout</Text>
                        </EasyButton>
                        ) : (
                            <EasyButton
                                secondary
                                medium
                                onPress={() => props.navigation.navigate('Login')}
                            >
                                <Text style={{color: 'white'}}>Login</Text>
                            </EasyButton>
                        )}
                    </Right>
                </View>
            </Container>
        ) : (
            <Container style={styles.empty_container}>
                <Text>Looks like your cart is empty</Text>
                <Text>Add products to your cart to get started</Text>
            </Container>
        )}
        </>
    )
}

const mapStateToProps = (state) => {
    const {cartItems} = state;
    return {
        cartItems: cartItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart()),
        removeFromCart: (item) => dispatch(actions.removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Card);