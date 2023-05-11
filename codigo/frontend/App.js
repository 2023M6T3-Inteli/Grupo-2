import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FeedPost } from './pages/feedposts';
import Login from './pages/Login';
import Label from './pages/CreateProject';
import CreateProject from './pages/CreateProject';
import {ShopCard} from './components/shopCard'
import { Shop } from './pages/feedshop';
import Ranking from './pages/Rank';

export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
      <Shop/>
      <Ranking></Ranking>
       <FeedPost />    
      <StatusBar style="auto" />
  </View>
  );
}


