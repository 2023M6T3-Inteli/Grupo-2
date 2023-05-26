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

import { Routes } from './route';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContextProvider } from './context/context';


export default function App() {

  return (

    <NavigationContainer>
      <ContextProvider>
        <View style={styles.container}>
          <Routes />
        </View>
      </ContextProvider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
  },
})
