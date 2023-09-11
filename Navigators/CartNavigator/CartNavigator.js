import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import styles from "./CartNavigator.style";
import Card from "../../Screens/Cart/Card";
import CheckoutNavigator from "../CheckoutNavigator";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Card"
                component={Card}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Checkout"
                component={CheckoutNavigator}
                options={{
                    title: 'Checkout'
                }}
            />
        </Stack.Navigator>
    )
}

export default function CartNavigator() {
    return <MyStack/>
}