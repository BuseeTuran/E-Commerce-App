import React, {useState, useCallback} from "react";
import { View, ActivityIndicator, FlatList, ScrollView, ImageBackground } from "react-native";
import { Container, Header, Icon, Input, Item, Text } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

import baseURL from "../../../assets/common/baseUrl";

import styles from "./ProductContainer.style";
import ProductList from "../ProductList";
import SearchedProducts from "../SearchedProducts/SearchedProducts";
import Banner from "../../../Shared/Banner/Banner";
import CategoryFilter from "../CategoryFilter/CategoryFilter";


const ProductContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] =useState([]);
    const [focus, setFocus] =useState();
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [loading, setLoading] = useState(true)

    useFocusEffect((
        useCallback(
            () => {
                setFocus(false);
                setActive(-1);
                
        
                axios
                    .get(`${baseURL}products`)
                    .then((res) => {
                        setProducts(res.data);
                        setProductsFiltered(res.data);
                        setProductsCtg(res.data);
                        setInitialState(res.data);
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.log('Api call error')
                    })
        
                axios
                    .get(`${baseURL}categories`)
                    .then((res) => {
                        setCategories(res.data)
                    })
                    .catch((error) => {
                        console.log('Api call error')
                    })
        
                return () => {
                    setProducts([]);
                    setProductsFiltered([]);
                    setFocus();
                    setCategories([]);
                    setActive();
                    setInitialState();
                }
            },
            [],
        )

    )) 
       
    

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }

    // Categories
    const changeCtg = (ctg) => {
        {
            ctg === 'all'
                ? [setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter((i) => i.category._id === ctg),
                        setActive(true)
                    ),
                ];
        }
    };

    return (
        <> 
        {loading == false ? (
        <Container>
            <Header style={styles.search_container} searchBar rounded androidStatusBarColor="white" iosBarStyle='dark-content' >
                <Item>
                    <Ionicons style={{left: 5, color: 'grey'}} size={18} name="search-outline" />
                    <Input 
                        
                        style={{left: 10, fontSize: 16}}
                        placeholder="Search"
                        onFocus={openList}
                        onChangeText={(text) => searchProduct(text)}

                    />
                    {focus == true ? (
                        <Icon onPress={onBlur} name="ios-close" />
                    ) : null }
                </Item>

            </Header>
            {focus == true ? (
                <SearchedProducts 
                    navigation={props.navigation}
                    productsFiltered={productsFiltered}
                />
            ) : (
                <ScrollView>
                    <View style={styles.container}>
                    <View>
                        <Banner/>
                    </View>
                    <View>
                        <CategoryFilter
                            categories={categories}
                            categoryFilter={changeCtg}
                            productsCtg={productsCtg}
                            active={active}
                            setActive={setActive}
                        />
                    </View>
                    {productsCtg.length > 0 ? (
                        <View style={styles.listContainer}>
                            {productsCtg.map((item) => {
                                return (
                                    <ProductList 
                                        navigation={props.navigation}
                                        key={item.name}
                                        item={item}
                                    />
                                )
                            })}                      
                        </View>
                   
                    ) : (
                        <View style={styles.center}>
                            <Text>No products found</Text>
                        </View>
                    )}
                    
                </View>
            </ScrollView>

            )}
            
        </Container>
        ) : (
            // Loading
            <Container style={[styles.center, {backgroundColor: "#f2f2f2"}]}>
                <ActivityIndicator size="large" color="blue" />

            </Container>
        )}
        </>
    )
}

export default ProductContainer