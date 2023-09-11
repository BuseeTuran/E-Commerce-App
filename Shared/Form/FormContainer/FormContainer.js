import React from "react";
import { View, ScrollView, Text } from "react-native";

import styles from "./FormContainer.style";


const FormContainer = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </ScrollView>
       
    )
}

export default FormContainer