import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {ShopCard} from './components/shopCard'
import { Shop } from './pages/feedshop';
import Ranking from './pages/Rank';

export default function App() {
  return (
    <View style={styles.container}>
      <Shop/>
      <Ranking></Ranking>
  </View>
  );
}

