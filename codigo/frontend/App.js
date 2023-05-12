import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FeedPost } from './pages/feedposts';
import Login from './pages/Login';
import Label from './pages/CreateProject';
import CreateProject from './pages/CreateProject';
import { ShopCard } from './components/shopCard'
import { Shop } from './pages/feedshop';
import Ranking from './pages/Rank';
import { Profile } from './pages/pofile';
import { FeedProject } from './pages/Feedprojects';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <FeedPost /> */}
      {/* <Shop /> */}
      {/* <Ranking></Ranking> */}
      {/* <StatusBar style="auto" /> */}
      {/* <CreateProject /> */}
      {/* <Profile /> }
      {/* <Login /> */}
      {/* <Ranking /> */}
      {/* <FeedProject /> */}
    </View>
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
  },
})
