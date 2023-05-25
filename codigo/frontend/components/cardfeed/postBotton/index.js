import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';

import styles from './style'

// modifier for the like is a button of r do a request
export function PostBotton({ likes }) {
    return (
        <View style={styles.botPostBg}>
            <View style={styles.botPostRow}>
                <Image source={require('../../../assets/like.png')} />
                <Text style={styles.botPostInfo}>{likes} Like</Text>
            </View>
            <View style={styles.botPostRow}>
                <Image source={require('../../../assets/comment.png')} />
                <Text style={styles.botPostInfo}>2k Comment</Text>
            </View>
            <View style={styles.botPostRow}>
                <Text style={styles.botPostInfo}>Share</Text>
                <Image source={require('../../../assets/share.png')} />
            </View>
        </View>
    )
}
