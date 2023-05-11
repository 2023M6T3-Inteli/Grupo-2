import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Label from './pages/CreateProject';
import CreateProject from './pages/CreateProject';

export default function App() {
  return (
    <View>
     { <CreateProject></CreateProject> }
    </View>
  );
}
