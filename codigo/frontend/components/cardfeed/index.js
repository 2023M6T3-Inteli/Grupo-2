import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { PostTop } from './postTop';
import { PostMid } from './postMid';
import { PostBotton } from './postBotton';


export function FeedCard() {
    return (
        <View>
            <PostTop />
            <PostMid />
            <PostBotton />
        </View>
    )
}