import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import styles from './style';


export function CardProject(){
    return (
    <View style={styles.container}>
        <Text style={styles.text}>PROJETO</Text>

        <StatusBar style="auto" />
    </View>
    )
}