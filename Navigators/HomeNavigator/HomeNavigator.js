import React from "react";
import {  } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import styles from "./HomeNavigator.style";
import ProductContainer from "../../Screens/Products/ProductContainer";
import SingleProduct from "../../Screens/Products/SingleProduct";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={ProductContainer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="ProductDetail"
                component={SingleProduct}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack/>
}