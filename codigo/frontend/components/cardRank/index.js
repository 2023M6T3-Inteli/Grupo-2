import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function CardRanking({ item }) {
    return (
        <View style={styles.num}>
            {/* <View style={styles.text2}> */}
            <Text style={styles.first}>{item.position}o</Text>
            <View style={styles.name}>
                <Text style={styles.mariana}> {item.name}</Text>
                <Text style={styles.mariana1}>{item.user}</Text>
            </View>
            <View style={styles.numbPoints}>
                <Text style={styles.numb}>{item.points}</Text>
                <Text style={styles.pontos}>Points</Text>
            </View>
            {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    num: {
        marginTop: 20,
        width: "100%",
        backgroundColor: '#192028',
        display: "flex",
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 8,
        justifyContent: "space-between",
        borderRadius: 10
    },
    text2: {
        color: '#fff',
    },
    first: {
        color: '#fff',
    },
    name: {
        color: '#fff',
    },
    mariana: {
        color: '#fff',
    },
    mariana1: {
        color: '#fff',
    },
    numbPoints: {},
    numb: {
        color: '#fff',
    },
    pontos: {
        color: '#fff',
    },

});