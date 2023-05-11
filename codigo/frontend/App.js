import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { FeedProject } from './pages/feedprojects';
import { FeedPost } from './pages/feedposts';
import { Profile } from './pages/pofile';

export default function App() {
  return (
    <View>
      <FeedProject />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
