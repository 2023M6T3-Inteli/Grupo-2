import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

import styles from './style'

import { CardProject } from '../../components/cardproject';

export function FeedProject() {
    return (
      <View style={styles.align}>
        <SafeAreaView>
          <ScrollView>
              <CardProject />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
}

