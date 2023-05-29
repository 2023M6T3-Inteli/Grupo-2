import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import styles from './style'

import { FeedCard } from '../../components/cardfeed';
import { BlackSpace } from '../../components/BlackSpace';

import { useState, useCallback } from 'react';

// props: infos the feed
export function FeedPost({ posts, setUpdate, updateValue }) {



    return (
        <View style={styles.align}>
            <SafeAreaView>
                <ScrollView>
                    {posts.map((items) => (


                        <FeedCard
                            key={items.idPost}
                            datas={items} />

                    ))}


                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

