import { SafeAreaView, Text, TextInput, View, text, Image, Button, Pressable, ScrollView } from 'react-native';

import { FeedProject } from '../Feedprojects';
import { FeedPost } from '../feedposts';
import { SwapComponent } from '../../components/swapComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';


export function Home() {



    return (
        <View style={{ height: '100%' }}>
            <SwapComponent />
        </View>
    )
}

