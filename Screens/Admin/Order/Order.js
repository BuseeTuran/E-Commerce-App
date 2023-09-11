import React, { useCallback, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./Order.style";
import baseURL from "../../../assets/common/baseUrl";
import OrderCard from "../../../Shared/OrderCard";

const Orders = (props) => {

    const [orderList, setOrderList] = useState();

    useFocusEffect(
        useCallback(
            () => {
                getOrders();
            return () => {
                setOrderList()
            }
            },
            [],
        )
    )

    const getOrders = () => {
        axios.get(`${baseURL}orders`)
        .then((x) => {
            setOrderList(x.data);
        })
        .catch((error) => console.log(error))
    }

    return (
        <View>
            <FlatList
                data={orderList}
                renderItem={({item}) => (
                    <OrderCard navigation={props.navigation} {...item} editMode={true} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Orders