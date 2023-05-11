import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ranking from './pages/Rank';

export default function App() {
  return (
    /*<View  style={styles.container}>
      <Text>Test 145222545</Text>
      <Text>Gabriel lindo</Text>
      <StatusBar style="auto" />
    </View>*/
    <Ranking></Ranking>
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
