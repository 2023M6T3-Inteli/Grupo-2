import React from "react"
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./style.js"
export function ShopCard() {
    return (
        // <View
        //     style={{
        //         flexDirection: 'row',
        //         height: 100,
        //         padding: 20,
        //         borderWidth: 2,
        //         borderColor: "red"
        //     }}
        //     >
        //     <Text>oi</Text>
        

            <View style={styles.cardBackground}>

                <Image source={require('../../assets/fotoPerfil.png')} style={styles.foto}></Image>
                <View style={styles.text2}>
                    <View style={styles.text1}>
                        <Text style={styles.textcolor}>Lorem lorem</Text>
                        <Text style={styles.textcolor}>@loremlorem</Text>
                    </View>
                    <View style={styles.text2} >

                        <Image source={require('../../assets/coins.png')} style={styles.coin} ></Image>
                        <Text style={styles.textcolor}>100</Text>
                    </View>
                </View>
            </View>

        // </View>
    );

}