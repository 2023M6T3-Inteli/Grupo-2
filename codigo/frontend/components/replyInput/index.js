import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView, TextInput, } from 'react-native';
import styles from './style'

export function ReplyInput(){
    return(
        <View style={styles.replyInputBase}>
            <View>
                <Image/>
            </View>
            <View>
                <TextInput/>
            </View>
        </View>
    )
}