import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles from './style'


function TopProfileInfo(){
    return(
        <View style={styles.topProfileBase}>
            <View style={styles.alignTopComponents}>
                <Image source={require('../../assets/backarrow.png')} />
                <Image source={require('../../assets/infolines.png')} />
            </View>
            <Image style={styles.profilePicAlign} source={require('../../assets/profilePic.png')} />
            <View style={styles.topInfosPos}>
                <Text style={styles.topProfileName}>Mariana Almeida</Text>
                <Text style={styles.topProfileCharge}>Software Developer</Text>
                <Text style={styles.topProfileAt}>@mariana</Text>
            </View>
        </View>
    )
}

export function Tags(){
    return(
        <View style={styles.tag}>
            <Text style={styles.tagText}>
                Front-end
            </Text>
        </View>
    )
}

function TagsProfileInfo(){
    return(
        <View style={styles.tagsProfileBase}>
            <Tags />
            <Tags />
            <Tags />
            <Tags />
        </View>
    )
}

function RankingProfileInfo(){
    return(
        <View style={styles.profileRankBase}>
            <Image source={require('../../assets/rankT.png')} />
            <Text style={styles.profileRankTxt}>105°</Text>
        </View>
    )
}


export function ProfileTop(){
    return(
        <View>
            <TopProfileInfo />
            <TagsProfileInfo />
            <RankingProfileInfo />
        </View>
    )
}