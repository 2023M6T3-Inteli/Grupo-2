import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

export function Tags({ techText }) {
    return (
        <View style={styles.tag}>
            <Text style={styles.tagText}>
                front-end
            </Text>
        </View>
    )
}