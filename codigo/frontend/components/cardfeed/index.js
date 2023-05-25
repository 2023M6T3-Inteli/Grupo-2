import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { PostTop } from './postTop';
import { PostMid } from './postMid';
import { PostBotton } from './postBotton';


export function FeedCard({ datas }) {

    console.log(datas)
    return (
        <View style={{ backgroundColor: "black" }}>
            <PostTop timer={datas.time} />
            <PostMid article={datas.article} imageURL={datas.image} />
            <PostBotton likes={datas.qntLikes} />
        </View>
    )
}