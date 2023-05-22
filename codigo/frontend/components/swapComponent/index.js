import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

export function SwapComponent(){
    return(
        <View style={styles.swapCompBase}>
            <View style={styles.swapCompDiv}>
                <Button style={styles.swapCompLetter} title='Posts' onPress={()=> status="true"} />
            </View>
            <View style={styles.swapCompDiv}>
                <Button style={styles.swapCompLetter} title='Projects'onPress={()=> status="true"} />
            </View>
        </View>
    )
}