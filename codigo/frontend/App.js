import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ShopCard} from './components/shopCard'
import { Shop } from './pages/feedshop';
export default function App() {
  return (
    <View style={styles.container}>
      <View>
      </View>
      <Shop/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
});
