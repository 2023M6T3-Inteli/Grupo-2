import React from "react"
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./style.js";
export function ShopCard() {
    return (
        <LinearGradient
        style={{
            height: 270, 
            width: 350, 
            marginTop: 80, 
            borderRadius: 17}}
        
            start={{x:0,y:0}}
            end={{x:1,y:1}}
            colors={['#0D2C3D','#31A2E3']}>

        <View style={styles.cardBackground}>
            <View style={styles.circle}></View>
            <Image source={require('../../assets/fotoPerfil.png')} style={styles.foto}></Image>
            <View style={styles.text2}>
                <View style={styles.text1}>
                    <Text style={styles.textcolor}>Lorem lorem</Text>
                    <Text style={styles.textcolor2}>@loremlorem</Text>
                </View>
                <View style={styles.text2} >
                    <Image source={require('../../assets/coins.png')} style={styles.coin} ></Image>
                    <Text style={styles.textcolor}>100</Text>
                </View>
            </View>
        </View>
        </LinearGradient>

    );

}