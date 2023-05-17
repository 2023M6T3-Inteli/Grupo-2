import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default styles = StyleSheet.create({
    cardTopBase: {
        marginTop: 10,
        height: 200,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#192028',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'column',
    },
    cardTopFirst: {
        flexDirection: 'row',
        height: '25%',
        width: '85%',
        alignItems: "center",
        gap: 180,
    },
    cardTopSecond: {
        flexDirection: 'row',
        height: '25%',
        justifyContent: 'center',
        gap: 15,
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
})