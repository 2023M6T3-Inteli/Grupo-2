import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

import { FeedCard } from '../../components/cardfeed';
import { BlackSpace } from '../../components/BlackSpace';

// props: infos the feed
export function FeedPost({ posts }) {



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