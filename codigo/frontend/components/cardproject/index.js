import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import styles from './style';


export function CardProject(){
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Test Project</Text>

        <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis pretium arcu, vel ullamcorper ante feugiat vitae. In augue risus, venenatis ut libero a, commodo malesuada mauris. </Text>

        <View style={styles.tagDiv}>
            <Text style={styles.tags}>#tag1</Text>
            <Text style={styles.tags}>#tag1</Text>
            <Text style={styles.tags}>#tag1</Text>
        </View>
        
        <View style={{flexDirection: 'column'}}>
            <Text style={styles.button}>Apply</Text>
        </View>
    </View>
    )
}