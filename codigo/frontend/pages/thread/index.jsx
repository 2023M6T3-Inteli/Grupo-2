import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import styles from './style'

import { PostTop } from '../../components/cardfeed/postTop';
import { ReplyComment } from '../../components/replyComment';
import { ReplyInput } from '../../components/replyInput';


export function Thread(){
    return(
        <View>
            <ScrollView>
                <PostTop />
                <ReplyComment />
                <PostTop />
                <ReplyComment />
                <ReplyInput />
            </ScrollView>
        </View>
    )
}