import React, {useState} from "react";
import {  } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";

import styles from "./CartItem.style";

const CartItem = (props) => {

    const data = props.item.item
    const [quantity, setQuantity] = useState(props.item.item.quantity)

    return(
        <ListItem
            style={styles.listItem}
            key={Math.random()}
            avatar
        >
            <Left>
                <Thumbnail source={{
                        uri: data.image 
                        ? data.image 
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}} />
            </Left>
            <Body style={styles.body}>
                <Left>
                    <Text>{data.name}</Text>
                </Left>
                <Right>
                    <Text>₺ {data.price} </Text>
                </Right>
            </Body>
            </ListItem>
    )
}

export default CartItem
