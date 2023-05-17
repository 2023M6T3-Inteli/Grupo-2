import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

export function Tags(){
    return(
        <View style={styles.tag}>
            <Text style={styles.tagText}>
                Front-end
            </Text>
        </View>
    )
}