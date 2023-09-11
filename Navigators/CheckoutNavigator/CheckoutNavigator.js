import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Screens
import Checkout from "../../Screens/Cart/Checkout";
import Payment from "../../Screens/Cart/Payment";
import Confirm from "../../Screens/Cart/Confirm";

import styles from "./CheckoutNavigator.style";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Shipping" component={Checkout} />
            <Tab.Screen name="Payment" component={Payment} />
            <Tab.Screen name="Confirm" component={Confirm} />
        </Tab.Navigator>
    )
}

export default function CheckoutNavigator() {
    return <MyTabs/>
}