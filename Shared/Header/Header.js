import React from "react";
import { Image, SafeAreaView, View } from "react-native";

import styles from "./Header.style";

const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <Image 
                source={require("../../assets/logo.png")}
                resizeMode="contain"
                style={styles.logo}
            
            />
        </SafeAreaView>
    )
}

export default Header