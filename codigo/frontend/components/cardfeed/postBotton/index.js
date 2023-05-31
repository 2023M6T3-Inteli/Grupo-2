import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import { URL_API } from '../../../api';

import styles from './style'
import { useEffect, useState, useRef } from 'react';
import LottieView from 'lottie-react-native'

// modifier for the like is a button of r do a request
export function PostBotton({ likes, idPost }) {

    const [state, setState] = useState(false)
    const [likesAPI, setLikesAPI] = useState(0)

    const animation = useRef(null)
    const firstRun = useRef(true)

    const likeFunction = async () => {
        try {
            const response = await fetch(`${URL_API}/user/like`, {
                method: "PUT",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idPost: idPost,
                    isLike: true
                })

            })
            const json = await response.json();

            setLikesAPI(json.qntLikes)


        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setLikesAPI(likes)
    }, [])


    return (
        <View style={styles.botPostBg}>
            <View style={styles.botPostRow}>
                <Pressable style={{ flexDirection: "row", alignItems: "center" }} onPress={likeFunction}>
                    <LottieView 
                        source={require('../../../assets/like.json')}
                        autoPlay={false}
                        loop={false}
                        style={styles.likeIcon}
                        resizeMode='cover'
                        ref={animation}
                    />
                    <Text style={styles.botPostInfo}>{likesAPI} Like</Text>
                </Pressable>
            </View>
            <View style={styles.botPostRow}>
                <Image source={require('../../../assets/comment.png')} />
                <Text style={styles.botPostInfo}>2k Comment</Text>
            </View>
            <View style={styles.botPostRow}>
                <Image source={require('../../../assets/share.png')} />
                <Text style={styles.botPostInfo}>Share</Text>
            </View>
        </View>
    )
}
