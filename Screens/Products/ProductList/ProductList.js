import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";

import styles from "./ProductList.style";
import ProductCard from "../ProductCard";

const ProductList = (props) => {
    const {item} = props;
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => props.navigation.navigate('ProductDetail', {item: item})}
        >
            <View style={styles.list_container}>
                <ProductCard {...item} />

            </View>
        </TouchableOpacity>
    )
}

export default ProductList