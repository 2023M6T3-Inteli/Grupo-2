import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardRanking from '../../components/cardRank';

export default function Ranking() {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingTitle}>Season ends in :</Text>
                <Text style={styles.headingText}>24:10:25</Text>
            </View>
            <View style={styles.shopNew}>
                <View style={styles.text1}>
                    <Text style={styles.shop}>Shop</Text>
                    <Text style={styles.new}>New</Text>
                </View>
                {[
                    {
                        position:1, name: "Mariana Almeida", user: "@mariana", points:450
                    },{
                        position:2, name: "Mariana Almeida", user: "@mariana", points:450
                    },{
                        position:3, name: "Mariana Almeida", user: "@mariana", points:450
                    },{
                        position:4, name: "Mariana Almeida", user: "@mariana", points:450
                    },
                ].map((item,index)=>(
                    <CardRanking item={item}/>
                ))}
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 48

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
    text1: {
        display: "flex",
        flexDirection: "row",
    },
    shop: {
        color: '#fff',
        marginTop: 48,
    },
    new: {
        color: '#fff',
        marginLeft: 15,
        backgroundColor: '#A534DB',
        borderRadius: 45,
        padding: 10,
        marginTop: 39,
    },
    
});