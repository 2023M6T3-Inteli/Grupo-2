import { SafeAreaView, Text, TextInput, View, text, Image, Button, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Tags } from '../../tags';
import * as ImagePicker from 'expo-image-picker'
import styles from './style'

export function ImgNewPost() {
    
    const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
        console.log(result.assets[0].uri)
    }
  };

    return (
         <View style={styles.newPostBotBase}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <Tags />
              <Tags />            
            </View>
            <View style={{marginBottom: 20}}>
              {image && <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />} 
            </View>
            <View style={styles.botLine}></View>
            <View style={{flexDirection: 'row', gap: 50, justifyContent: 'center', marginTop: 20}}>
              <Pressable onPress={pickImage}>
                  <Image source={require('../../../assets/addimg.png')}/>
              </Pressable>
              <View>
                <Image source={require('../../../assets/addtag.png')} />
              </View>
              <View>
                <LinearGradient colors={['#3EACDB', '#4164E1']}
                  style={{
                      width: 150,
                      height: 30,
                      borderRadius: 30,
                      padding: 5,

                      alignSelf: "center",
                      alignItems: "center",
                      justifyContent: "center"

                  }} >
                  <Pressable onPress={() => console.log('New Post')}>
                      <Text style={{ color: "white", fontSize: 20 }}>Publish</Text>
                  </Pressable>
                </LinearGradient>
              </View>
            </View> 
         </View>

    )
}

