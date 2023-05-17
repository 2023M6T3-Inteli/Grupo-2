import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

export function TopProfileInfo(){
    return(
        <View style={styles.topProfileBase}>
            <Image style={styles.profilePicAlign} source={require('../../../assets/profilePic.png')} />
            <View style={styles.topInfosPos}>
                <Text style={styles.topProfileName}>Mariana Almeida</Text>
                <Text style={styles.topProfileCharge}>Software Developer</Text>
                <Text style={styles.topProfileAt}>@mariana</Text>
            </View>
        </View>
    )
}