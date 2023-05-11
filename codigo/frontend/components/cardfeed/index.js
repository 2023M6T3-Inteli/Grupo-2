import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'

function PostTop(){
    return(
        <View style={styles.topPostBase}>
            <View style={styles.topPostVote}>
                <View style={styles.topPostPos}>
                    <Image source={require('../../assets/upvote.png')} />
                    <Text style={styles.topPostColor}>30</Text>
                </View>
                <View style={styles.topPostPos}>
                   <Image source={require('../../assets/downvote.png')} />
                   <Text style={styles.topPostColor}>10</Text>
                </View>
            </View>
            <View>
                <Image style={styles.topPostImg} source={require('../../assets/profileExample.png')}/>
            </View>
            <View>
                <Text style={styles.topPostName}>Alice Wong</Text>
                <Text style={styles.topPostTime}>4 minutes ago</Text>
            </View>
            <View>
                <Image style={styles.topPostDots} source={require('../../assets/dots.png')} />
            </View>
        </View>
    )
}

function PostMid(){
    return(
        <View>
            <Image style={styles.midPostImg} source={require('../../assets/feedpostimg.png')} />
            <View style={styles.midPostBg}>
                <Text style={styles.midPostDesc}>
                    This an text of example, this is how am drescription of a post will look like on the feed of posts
                </Text>
                <Text style={styles.midPostHash}>
                    #Technologie
                    #Future
                </Text>
            </View>
        </View>
    )
}

function PostBotton(){
    return(
        <View style={styles.botPostBg}>
            <View style={styles.botPostRow}>
                <Image source={require('../../assets/like.png')} />
                <Text style={styles.botPostInfo}>9,5k Like</Text>
            </View>
            <View style={styles.botPostRow}>
                <Image source={require('../../assets/comment.png')} />
                <Text style={styles.botPostInfo}>2k Comment</Text>
            </View>
            <View style={styles.botPostRow}>
                <Text style={styles.botPostInfo}>Share</Text>
                <Image source={require('../../assets/share.png')} />
            </View>
        </View>
    )
}

export function FeedCard(){
    return(
        <View>
            <PostTop />
            <PostMid />
            <PostBotton />
        </View>
    )
}