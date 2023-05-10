import React from "react"
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./style.js"
import { LinearGradient } from 'expo-linear-gradient';


export function SmallShopCard() {
    return (
        <LinearGradient
        style={{
            width: 140,
            height: 190,
            borderRadius: 17,
            marginTop: 17, 
            }}
        
            colors={['#0D2C3D','#31A2E3']}>
        
            <View style={styles.cardBackground}>

                <View style={styles.text2}>
                    <Text style={styles.textcolor}>Lorem lorem</Text>
                    <View style={styles.text}>
                        <Image source={require('../../assets/coins.png')} style={styles.coin} ></Image>
                        <Text style={styles.textcolor}>100</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );

}