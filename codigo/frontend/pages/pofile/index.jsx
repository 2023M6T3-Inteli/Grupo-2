import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native';
import styles from './style'

import { RankingProfileInfo } from '../../components/profile/profileRanking';
import { TopProfileInfo } from '../../components/profile/profileTop';
import { Tags } from '../../components/tags';
import { SwapComponent } from '../../components/swapComponent';
import { FeedCard } from '../../components/cardfeed';
import { BlackSpace } from '../../components/BlackSpace';

export function Profile(){
    return(
        <View style={styles.align}>
            <SafeAreaView>
                <ScrollView>
                    <TopProfileInfo />
                    <View style={styles.tagsProfileBase}>
                        <Tags />
                        <Tags />
                        <Tags />
                        <Tags />
                    </View>
                    <RankingProfileInfo />
                    <SwapComponent />
                    <FeedCard />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}