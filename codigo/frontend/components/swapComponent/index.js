import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView,} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import styles from './style'
import { NavigationContainer } from '@react-navigation/native';

import { FeedProject } from '../../pages/Feedprojects';
import { FeedPost } from '../../pages/feedposts';

const Tab = createMaterialTopTabNavigator();

export function SwapComponent(){
    return(
        <View style={styles.swapCompBase}>
            <Tab.Navigator initialRouteName='Posts' screenOptions={({tabBarStyle: {backgroundColor: '#000'}, tabBarActiveTintColor: "#fff", tabBarInactiveTintColor: "#fff"})}>
                <Tab.Screen name='Posts' component={FeedPost}/>
                <Tab.Screen name='Projects' component={FeedProject} />
            </Tab.Navigator>
        </View>
    )
}