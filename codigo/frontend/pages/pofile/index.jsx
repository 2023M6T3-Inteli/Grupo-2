import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native';
import styles from './style'

import { ProfileTop } from '../../components/profile';
import { SwapComponent } from '../../components/cardfeed';
import { FeedCard } from '../../components/cardfeed';
import { CardProject } from '../../components/cardproject';


export function Profile(){
    return(
        <View style={styles.align}>
            <SafeAreaView>
                <ScrollView>
                    <ProfileTop />
                    <SwapComponent />
                    <FeedCard />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}