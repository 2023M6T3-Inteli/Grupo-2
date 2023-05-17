import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default styles = StyleSheet.create({
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
    cardBotImg: {
        height: 40,
        width: 40,
        marginLeft: 5,
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
    cardBotOrder: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 220,
        justifyContent: 'center',
    }
});