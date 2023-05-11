import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function CardRanking({ item }) {
    return (
        <View style={styles.num}>
            {/* <View style={styles.text2}> */}
            <View style={styles.barra1}>
            <Text style={styles.first}>{item.position}º</Text>
            </View>
            <View style={styles.barra}></View>
            <Image source={require("../../assets/FotoRanking.png")}/>
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
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 10
    },
    barra1: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    barra: {
        width: 1,
        height: 55,
        backgroundColor: "#fff",

    },
    name: {
        color: '#fff',
        justifyContent: "center",
    },
    mariana: {
        color: '#fff',
    },
    mariana1: {
        color: '#42484F',
    },
    numbPoints: {
        justifyContent: "center",
    },
    numb: {
        color: '#31A2E3',
    },
    pontos: {
        color: '#42484F',
    },

});