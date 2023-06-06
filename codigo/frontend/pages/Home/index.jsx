import { SafeAreaView, Text, TextInput, View, text, Image, Button, Pressable, ScrollView, StyleSheet, RefreshControl } from 'react-native';

import { FeedProject } from '../Feedprojects';
import { FeedPost } from '../feedposts';
import { SwapComponent } from '../../components/swapComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useCallback } from 'react';
import { BlackSpace } from '../../components/BlackSpace';




export function Home() {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    return (
        <View style={{ height: '100%' }}>
            <ScrollView
                contentContainerStyle={styles2.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <BlackSpace />
                <BlackSpace />
                <BlackSpace />
                <BlackSpace />
                <BlackSpace />
                <SwapComponent state={refreshing} />
            </ScrollView>
        </View>
    )
}

const styles2 = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
