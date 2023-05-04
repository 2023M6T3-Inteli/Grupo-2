import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {CardProject} from '../../components/cardproject';
import styles from './style'

export function Projects() {
    return (
      <View style={styles.page}>
        <Text>Teste de cardproject</Text>

        <CardProject/>
        
        <StatusBar style="auto" />
      </View>
    );
}

