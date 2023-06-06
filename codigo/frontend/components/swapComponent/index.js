import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { URL_API } from '../../api';

import styles from './style'
import { NavigationContainer } from '@react-navigation/native';

import { FeedProject } from '../../pages/Feedprojects';
import { FeedPost } from '../../pages/feedposts';
import { useEffect, useState } from 'react';

const Tab = createMaterialTopTabNavigator();

// req here for distribue for pages
export function SwapComponent({ state }) {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await fetch(`${URL_API}/user/posts`)
            const json = await response.json();

            setPosts(json)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPosts()
    }, [state])

    return (
        <View style={styles.swapCompBase}>
            <Tab.Navigator initialRouteName='Posts' screenOptions={({ tabBarStyle: { backgroundColor: '#000' }, tabBarActiveTintColor: "#fff", tabBarInactiveTintColor: "#fff" })}>
                <Tab.Screen name='Posts' children={() => <FeedPost posts={posts.reverse()} />} />
                <Tab.Screen name='Projects' component={FeedProject} />
            </Tab.Navigator>
        </View>
    )
}