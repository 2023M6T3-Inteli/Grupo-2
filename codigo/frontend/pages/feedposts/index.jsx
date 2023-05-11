import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styles from './style'

import { FeedCard } from '../../components/cardfeed';

export function FeedPost(){
    return(
        <View style={styles.align}>
            <FeedCard/>
            <View style={styles.blackSpace}></View>
            <FeedCard />
        </View>
    )
}