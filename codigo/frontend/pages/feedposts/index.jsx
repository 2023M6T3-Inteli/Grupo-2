import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

import { FeedCard } from '../../components/cardfeed';
import { BlackSpace } from '../../components/BlackSpace';
import { SwapComponent } from '../../components/swapComponent';
import { SelecPosts } from '../../components/selectionPosts';


export function FeedPost(){
    return(
        <View style={styles.align}>
            <SafeAreaView>
                <ScrollView>
                    <SwapComponent />
                    <SelecPosts />
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