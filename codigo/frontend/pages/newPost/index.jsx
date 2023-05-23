import { SafeAreaView, Text, TextInput, View, text, Image, Button, Pressable, ScrollView } from 'react-native';

import { ImgNewPost } from '../../components/newPost/newPostBot';
import { NewPostInput } from '../../components/newPost/newPostInput';
import { NewPostTop } from '../../components/newPost/newPostTop';

export function NewPost(){
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#000'}} >
            <SafeAreaView>
                <NewPostTop />
                <NewPostInput />
                <ImgNewPost />
            </SafeAreaView>
        </View>
    )
}