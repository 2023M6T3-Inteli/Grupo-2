import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

export function PostTop({ timer }) {
    return (
        <View style={styles.topPostBase}>
            <View style={styles.topPostVote}>
                <View style={styles.topPostPos}>
                    <Image source={require('../../../assets/upvote.png')} />
                    <Text style={styles.topPostColor}>30</Text>
                </View>
                <View style={styles.topPostPos}>
                    <Image source={require('../../../assets/downvote.png')} />
                    <Text style={styles.topPostColor}>10</Text>
                </View>
            </View>
            <View style={styles.topPosAlign}>
                <Image style={styles.topPostImg} source={require('../../../assets/profileExample.png')} />
            </View>
            <View style={{ flexDirection: 'row', gap: 150 }}>
                <View style={styles.topPosAlign}>
                    <Text style={styles.topPostName}>Trocar backend</Text>
                    <Text style={styles.topPostTime}>{timer}</Text>
                </View>
                <View style={styles.topPosAlign}>
                    <Image style={styles.topPostDots} source={require('../../../assets/dots.png')} />
                </View>
            </View>
        </View>
    )
}