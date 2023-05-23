import { SafeAreaView, Text, TextInput, View, text, Image, Button, Pressable, ScrollView } from 'react-native';

import { FeedProject } from '../Feedprojects';
import { FeedPost } from '../feedposts';
import { SwapComponent } from '../../components/swapComponent';

export function Home() {
    return (
        <View style={{ height: '100%'}}>
            <SwapComponent />
        </View>
    )
}

