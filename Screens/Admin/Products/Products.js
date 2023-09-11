import React, {useState, useCallback} from "react";
import { View, Text, FlatList, ActivityIndicator, Button, Modal } from "react-native";
import { Header, Item, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./Products.style";

import baseURL from "../../../assets/common/baseUrl";
import ListItem from "../ListItem/ListItem";
import EasyButton from "../../../Shared/StyledComponents/EasyButton";

const ListHeader = () => {
    return (
        <View
            elevation={1}
            style={styles.list_header}
        >
            <View style={styles.header_item}></View>
            <View style={styles.header_item}>
                <Text style={{fontWeight: '600'}}>Brand</Text>
            </View>
            <View style={styles.header_item}>
                <Text style={{fontWeight: '600'}}>Name</Text>
            </View>
            <View style={styles.header_item}>
                <Text style={{fontWeight: '600'}}>Category</Text>
            </View>
            <View style={styles.header_item}>
                <Text style={{fontWeight: '600'}}>Price</Text>
            </View>
        </View>
    )
}

const Products = (props) => {

    const [productList, setProductList] = useState();
    const [productFilter, setProductFilter] = useState();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState();

    useFocusEffect(
        useCallback(
            () => {
                // Get Token
                AsyncStorage.getItem("jwt")
                    .then((res) => {
                        setToken(res)
                    })
                    

                axios.get(`${baseURL}products`)
                    .then((res) => {
                        setProductList(res.data);
                        setProductFilter(res.data);
                        setLoading(false);
                    })
                return () => {
                    setProductList();
                    setProductFilter();
                    setLoading(true);
                }
            },
            [],
        )
    )

    const searchProduct = (text) => {
        if (text == "") {
            setProductFilter(productList)
        }
        setProductFilter(
            productList.filter((i) => 
                i.name.toLowerCase().includes(text.toLowerCase())
            )
        )
    }

    const deleteProduct = (id) => {
        axios.delete(`${baseURL}products/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            const products = productFilter.filter((item) => item.id !== id);
            setProductFilter(products);
        })
        .catch((error) => console.log(error))
    }

    return (
        <View style={styles.container}>
            <View style={styles.button_container}>
                <EasyButton
                    secondary
                    medium
                    onPress={() => props.navigation.navigate("Orders")}
                >
                    <Icon name="shopping-bag" size={18} color="white"/>
                    <Text style={styles.button_text}>Orders</Text>
                </EasyButton>
                <EasyButton
                    secondary
                    medium
                    onPress={() => props.navigation.navigate("ProductForm")}
                >
                    <Icon name="plus" size={18} color="white"/>
                    <Text style={styles.button_text}>Products</Text>
                </EasyButton>
                <EasyButton
                    secondary
                    medium
                    onPress={() => props.navigation.navigate("Categories")}
                >
                    <Icon name="plus" size={18} color="white"/>
                    <Text style={styles.button_text}>Categories</Text>
                </EasyButton>
            </View>
            <View>
                <Header searchBar rounded>
                    <Item style={styles.item}>
                        <Icon name="search" />
                        <Input 
                            placeholder="Search"
                            onChangeText={(text) => searchProduct(text) }
                        />
                    </Item>
                </Header>
            </View>
            {loading ? (
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            ) : (
                <FlatList 
                    data={productFilter}
                    ListHeaderComponent={ListHeader}
                    renderItem={({ item, index }) => (
                        <ListItem
                            {...item} 
                            navigation={props.navigation}
                            index={index}
                            delete={deleteProduct}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            )}
        </View>
    )

}

export default Products