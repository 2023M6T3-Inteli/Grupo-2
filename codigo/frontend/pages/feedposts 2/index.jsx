import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

import { FeedCard } from '../../components/cardfeed';
import { SwapComponent } from '../../components/cardfeed';

export function BlackSpace(){
    return(
        <View style={styles.blackSpace}>
        </View>
    )
}

export function FeedPost(){
    return(
        <View style={styles.align}>
            <SafeAreaView>
                <ScrollView>
                    <SwapComponent />
                    <FeedCard/>
                    <BlackSpace />
                    <FeedCard />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}