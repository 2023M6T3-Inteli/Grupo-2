import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { FeedPost } from './pages/feedposts';


export default function App() {
  return (
  <View>
      <FeedPost />    
  </View>
  );
}

