import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

export function PostMid(){
    return(
        <View>
            <Image style={styles.midPostImg} source={require('../../../assets/feedpostimg.png')} />
            <View style={styles.midPostBg}>
                <Text style={styles.midPostDesc}>
                    This an text of example, this is how am drescription of a post will look like on the feed of posts
                </Text>
                <Text style={styles.midPostHash}>
                    #Technologie
                    #Future
                </Text>
            </View>
        </View>
    )
}