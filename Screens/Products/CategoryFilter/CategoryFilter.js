import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { ListItem, Badge, Text } from "native-base";

import styles from "./CategoryFilter.style";

const CategoryFilter = (props) => {
    return (
        <ScrollView
            bounces={true}
            horizontal={true}
            style={styles.container}
        >
            <ListItem style={styles.list}>
                <TouchableOpacity
                    key={1}
                    onPress={() => {
                        props.categoryFilter('all'), props.setActive(-1)
                    }}
                >
                    <Badge
                        style={[styles.center, {margin:5},
                            props.active == -1 ? styles.active : styles.inactive
                        ]}
                    >
                        <Text style={styles.all}>All</Text>
                    </Badge>
                </TouchableOpacity>
                {props.categories.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => { 
                            props.categoryFilter(item.id), 
                            props.setActive(props.categories.indexOf(item))
                        }}
                    >
                        <Badge 
                            style={[styles.center, {margin:3}, 
                                props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                            ]}
                        >
                            <Text style={styles.all}>{item.name}</Text>
                        </Badge>
                    </TouchableOpacity>
                ))}
            </ListItem>

        </ScrollView>
    )
}

export default CategoryFilter