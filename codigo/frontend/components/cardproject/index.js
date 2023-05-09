import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style';


export function CardProject(){
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Test Project</Text>

        <View style={styles.leadersDiv}>
            <Image source={require('../../assets/Vector.png')}/>
            <Text style={styles.leadersText}>Leader name</Text>
            <Text style={styles.leadersText}>04/05/2023</Text>

            <Text style={styles.leadersText}>Open</Text>
        </View>

        <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis pretium arcu, vel ullamcorper ante feugiat vitae. In augue risus, venenatis ut libero a, commodo malesuada mauris. </Text>

        <View style={styles.tagDiv}>
            <Text style={styles.tags}>#python</Text>
            <Text style={styles.tags}>#react</Text>
            <Text style={styles.tags}>#linux</Text>
        </View>
        
        <View style={{flexDirection: 'column'}}>
            <Text style={styles.button}>Apply</Text>
        </View>
    </View>
    )
}