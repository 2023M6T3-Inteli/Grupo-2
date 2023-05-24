import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

import { FeedCard } from '../../components/cardfeed';
import { BlackSpace } from '../../components/BlackSpace';

// props: infos the feed
export function FeedPost({ test }) {
    return (
        <View style={styles.align}>
            <SafeAreaView>
                <ScrollView>
                    <Text>{test}</Text>
                    <FeedCard />
                    <BlackSpace />
                    <FeedCard />
                    <BlackSpace />
                    <FeedCard />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}