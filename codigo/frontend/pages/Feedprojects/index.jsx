import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

import { CardProject } from '../../components/cardproject';
import { SwapComponent } from '../../components/cardfeed';

import styles from './style'

export function FeedProject() {
    return (
      <View style={styles.alignCardProject}>
        <SafeAreaView>
          <ScrollView>
            <SwapComponent />
            <CardProject/>
            <CardProject/>
            <CardProject/>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
}

