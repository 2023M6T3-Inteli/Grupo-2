import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styles from './style'

import { ProfileTop } from '../../components/profile';
import { SwapComponent } from '../../components/cardfeed';

export function Profile(){
    return(
        <View style={styles.align}>
            <ProfileTop />
            <SwapComponent />
        </View>
    )
}