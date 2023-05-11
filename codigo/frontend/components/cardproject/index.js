import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style';
import { Tags } from '../profile/index'


function CardTop(){
    return(
        <View style={styles.cardTopBase}>
            <View style={styles.cardTopFirst}>
                <Text style={styles.cardTittle}>Desenvolvimento Web</Text>
                <Image source={require('../../assets/nocp.png')}/>
                <Image source={require('../../assets/save.png')} />
            </View>
            <View style={styles.cardTopSecond}>

            </View>
            <View style={styles.cardTopThird}> 

            </View>
            <View style={styles.cardTopFourth}>

            </View>
        </View>
    )
}

function CardBot(){
    return(
        <View style={styles.cardBotBase}>
            
        </View>
    )
}

export function CardProject(){
    return (
        <View>
            <CardTop />
            <CardBot />
        </View>
    )
}