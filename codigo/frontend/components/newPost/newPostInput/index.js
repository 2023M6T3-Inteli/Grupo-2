import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, TextInput } from 'react-native';
import styles from './style';


export function NewPostInput(){
    return(
        <View style={styles.inputSize}>
            <TextInput style={{color: '#fff', marginLeft: 10, }} placeholder='What are you thinking about today?' placeholderTextColor="gray" />
        </View>
    )
}