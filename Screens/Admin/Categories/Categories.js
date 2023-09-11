import React, {useEffect, useState} from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import baseURL from "../../../assets/common/baseUrl";
import styles from "./Categories.style";
import EasyButton from "../../../Shared/StyledComponents/EasyButton";

const Item = (props) => {
    return (
        <View style={styles.item}>
            <Text>{props.item.name}</Text>
            <EasyButton
                danger
                medium
                onPress={() => props.delete(props.item.id)}
            >
                <Text style={{color: "white", fontWeight: "bold"}}>Delete</Text>
            </EasyButton>
        </View>
    )
}

const Categories = (props) => {

    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState();
    const [token, setToken] = useState();

    useEffect(() => {
        AsyncStorage.getItem("jwt")
        .then((res) => {
            setToken(res);
        }) 
        .catch((error) => console.log(error));

        axios.get(`${baseURL}categories`)
        .then((res) => setCategories(res.data))
        .catch((error) => alert("Error to load categories"))

        return () => {
            setCategories();
            setToken();
        }
    }, [])

    const addCategory = () => {
        const category = {
            name: categoryName
        };

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.post(`${baseURL}categories`, category, config)
        .then((res) => setCategories([...categories, res.data]))
        .catch((error) => alert("Error to load categories"))

        setCategoryName("");
    }

    const deleteCategory = (id) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };

        axios.delete(`${baseURL}categories/${id}`, config)
        .then((res) => {
            const newCategories = categories.filter((item) => item.id !== id)
            setCategories(newCategories);
        })
        .catch((error) => alert("Error to load categories"))
    }

    return (
        <View style={{position: "relative", height: "100%"}}>
            <View style={{marginBottom: 60}}>
                <FlatList 
                    data={categories}
                    renderItem={({item, index}) => (
                        <Item item={item} index={index} delete={deleteCategory} />
                    )}

                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.bottom_bar}>
                <View>
                    <Text>Add Category</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        value={categoryName}
                        style={styles.input_container}
                        onChangeText={(text) => setCategoryName(text)}
                    />
                </View>
                <View>
                    <EasyButton
                        medium
                        primary
                        onPress={() => addCategory()}
                    >
                        <Text style={{color: "white", fontWeight: "bold" }}>Submit</Text>
                    </EasyButton>
                </View>
            </View>
        </View>
    )
}

export default Categories