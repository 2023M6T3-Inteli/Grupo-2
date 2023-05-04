import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {Projects} from './pages/Feedprojects';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test 145222545</Text>
      <Text>Gabriel lindo</Text>

      <Projects/>

      <StatusBar style="auto" />
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
