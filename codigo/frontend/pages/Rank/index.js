import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CardRanking from '../../components/cardRank';
import { useNavigation } from "@react-navigation/native";



export default function Ranking() {

    const dataUsers = [
        {
            position: 1, name: "Mariana Almeida", user: "@mariana", points: 450
        }, {
            position: 2, name: "Mariana Almeida", user: "@mariana", points: 450
        }, {
            position: 3, name: "Mariana Almeida", user: "@mariana", points: 350
        },
    ]
    const lastUsers = [
        {
            position: 10, name: "Mariana Almeida", user: "@mariana", points: 450
        },
    ]

    const navigation = useNavigation()


    return (

        <ScrollView>
            <View style={styles.container}>


                <View style={styles.heading}>
                    <Text style={styles.headingTitle}>Season ends in :</Text>
                    <Text style={styles.headingText}>24:10:25</Text>
                </View>
                <View style={styles.shopNew}>
                    <View style={styles.text1}>
                        <Text onPress={() => navigation.navigate("Shop")} style={styles.shop}>Shop</Text>
                        <Text style={styles.new}>new</Text>
                    </View>
                    {dataUsers.map((item, index) => (
                        <CardRanking item={item} />
                    ))}
                </View>
                <View style={styles.barraDeitada}></View>
                <View style={styles.shopNew}>
                    <CardRanking item={lastUsers[0]} />
                </View>
                <StatusBar style="auto" />
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 48,
        justifyContent: 'center',
        height: 800,
    },
    heading: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    headingTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
    },
    headingText: {
        color: '#4289D9',
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    shopNew: {
        display: "flex",
        width: "80%",
        flexDirection: "column",
        marginHorizontal: 8,
        justifyContent: "center",
    },
    barraDeitada: {
        backgroundColor: "#fff",
        width: 330,
        height: 1,
        marginTop: 90,

    },
    text1: {
        display: "flex",
        flexDirection: "row",
    },
    shop: {
        color: '#fff',
        marginTop: 48,
        fontSize: 20,
    },
    new: {
        color: '#fff',
        marginLeft: 15,
        backgroundColor: '#A534DB',
        borderRadius: 45,
        padding: 10,
        marginTop: 44,
        fontSize: 13,

    },

});