import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { CardProject } from '../../components/cardproject';

import styles from './style'

export function FeedProject() {
    return (
      <View style={styles.alignCardProject}>
        <CardProject/>
        <CardProject/>
      </View>
    );
}

