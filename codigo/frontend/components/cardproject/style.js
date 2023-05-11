import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    cardTopBase: {
        marginTop: 80,
        height: 200,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#192028',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'column',
    },
    cardBotBase: {
        height: 60,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#232C35',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',

    },
    cardTopFirst: {
        flexDirection: 'row',
        height: '25%',
        width: '85%',
        alignItems: "center",
    },
    cardTopSecond: {
        flexDirection: 'row',
        height: '25%',
        justifyContent: 'center',
        alignItems: "center",
    },
    cardTopThird: {
        flexDirection: 'row',
        height: '25%',
        justifyContent: 'center',
        alignItems: "center",
    },
    cardTopFourth: {
        flexDirection: 'row',
        height: '25%',
        justifyContent: 'center',
        alignItems: "center",
    },  
    cardTittle: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    infoLetter: {
        color: '#fff',
        fontWeight: 'bold',
    },
    statusLetter: {
        color: '#9BC438'

    },
    descriptionLetter: {
        color: '#9999',
        width: '80%'
        
    },
    cardBotImg: {
        height: 40,
        width: 40,
    },
    applicantsLetter: {
        color: '#31A2E3',
        fontSize: 15,
        fontWeight: 'bold',
    },
    cardBotArrow: {
        height: 12,
        width: 12,
    },
    applicantsAlign: {
        flexDirection: 'row',
        
    },
});