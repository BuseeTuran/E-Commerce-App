import React from "react";
import { View } from "react-native";
import { Content, Left, Body, ListItem, Thumbnail, Text } from "native-base";


import styles from "./SearchedProducts.style";



const SearchedProducts = (props) => {
    const {productsFiltered} = props;

    return (
        <Content style={styles.container}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem
                        onPress={() => {
                            props.navigation.navigate("ProductDetail", {item: item})
                        }}
                        key={item._id}
                        avatar
                    >
                        <Left>
                            <Thumbnail
                                source={{uri: item.image ? 
                                    item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                                }}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description} </Text>
                        </Body>
                    </ListItem>
                ))
            ) : (
                <View style={styles.center}>
                    <Text style={styles.text}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </Content>
    );
};

export default SearchedProducts