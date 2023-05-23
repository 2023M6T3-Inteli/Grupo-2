import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import styles from './style'
import TabBarTop from '@react-navigation/material-top-tabs/lib/typescript/src/views/MaterialTopTabBar';
const Tab = createMaterialTopTabNavigator();

export function SwapComponent(){

    return(
        <View style={styles.swapCompBase}>
            <Tab.Navigator>
                <Tab.Screen
                 
                />               
            </Tab.Navigator>
        </View>
    )
}