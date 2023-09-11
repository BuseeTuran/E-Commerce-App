import React, {useState, useEffect} from "react";
import { Image, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";

import styles from "./Banner.style";

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData([
            "https://img.freepik.com/free-photo/fashion-collection-design-shopping-graphic-words_53876-144405.jpg?w=740&t=st=1694447910~exp=1694448510~hmac=fe87332d019d5772e657f804a7979b8d025f8a8e80775e2bd1e0a34336456866",
            "https://img.freepik.com/free-psd/fashion-sale-horizontal-banner-template_23-2148658381.jpg?w=740&t=st=1694448003~exp=1694448603~hmac=e35ca17489023194ef81c6f144cfddaa93c34259615e549e4b157f2718c7756f",
            "https://img.freepik.com/free-psd/express-your-style-psd-presentation-template-fashion_53876-130180.jpg?w=740&t=st=1694448051~exp=1694448651~hmac=97dcc7a6405fe65063e4210265fda06296421a175a0a430eaf27b53f5909cf97",
        ])

        return () => {
            setBannerData([])
        }
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper 
                        showButtons={false}
                        autoplay={true}
                        autoplayTimeout={2}
                        style={styles.bottom_swiper}
                    >
                        {
                            bannerData.map((item) => {
                                return(
                                    <Image
                                        key={item}
                                        style={styles.imageBanner}
                                        resizeMode="contain"
                                        source={{uri: item}}
                                    />
                                );
                            })
                        }
                    </Swiper>
                    <View style={{height:20}}>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Banner