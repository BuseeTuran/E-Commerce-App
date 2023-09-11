import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TouchableHighlight, Button, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./ListItem.style";
import EasyButton from "../../../Shared/StyledComponents/EasyButton";

const ListItem = (props) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
            >
                <View style={styles.centered_view}>
                    <View style= {styles.modal_view}>
                        <TouchableOpacity
                            underlayColor="#E8E8E8"
                            onPress={() => {
                                setModalVisible(false)
                            }}
                            style={{
                                alignSelf: "flex-end",
                                position: "absolute",
                                top: 5,
                                right: 10
                            }}
                        >
                            <Icon name="close" size={20} />
                        </TouchableOpacity>
                        <EasyButton 
                            medium 
                            secondary
                            onPress={() => [
                                props.navigation.navigate("ProductForm", {item: props}),
                                setModalVisible(false)
                            ]}
                        >
                            <Text style={styles.text_style}>Edit</Text>
                        </EasyButton>
                        <EasyButton 
                            medium 
                            danger
                            onPress={() => [props.delete(props.id), setModalVisible(false)]}
                        >
                            <Text style={styles.text_style}>Delete</Text>
                        </EasyButton>
                    </View>
                </View>

            </Modal>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("ProductDetail", {item: props})
                }}
                onLongPress={() => setModalVisible(true)}
                style={[styles.container, {
                    backgroundColor: props.index % 2 == 0 ? "white" : "gainsboro"
                }]}
            >
                <Image
                    source={{
                        uri: props.image
                        ? props.image 
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }}
                    resizeMode="contain"
                    style={styles.image}
                />
                <Text style={styles.item}>{props.brand}</Text>
                <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">{props.name}</Text>
                <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">{props.category.name}</Text>
                <Text style={styles.item}>₺ {props.price}</Text>

            </TouchableOpacity>
        </View>
    )
}

export default ListItem