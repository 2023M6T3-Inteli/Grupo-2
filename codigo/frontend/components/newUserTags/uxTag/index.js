import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

export function UxTag(){
    return(
        <View style={styles.tagBase}>
            <Image style={styles.iconSize} source={require('../../../assets/Icons/uxicon.png')}/>
            <Text style={styles.nameSize}>UX design</Text>
        </View>
    )
}