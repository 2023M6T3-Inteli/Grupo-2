import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default styles = StyleSheet.create({
    topPostBase: {
        backgroundColor: '#000',
        width: '100%',
        height: 100,
        flexDirection: 'row',
    },
    topPostVote: {
        justifyContent: 'center',
        flexDirection: 'column',
        height: 35,
        width: 35,
        alignSelf: 'center',
        marginLeft: 10,
        gap: 15,
    },
    topPosAlign: {
        justifyContent: 'center',
    },
    topPostPos: {
        flexDirection: 'row',
    },
    topPostColor: {
        marginLeft: 5,
        color: '#fff'
    },
    topPostImg: {
        borderRadius: 4,
        height: 70,
        width: 70,
        marginLeft: 10,
    },
    topPostName: {
        color: `#fff`,
        fontSize: 15,
        marginLeft: 10,
    },
    topPostTime: {
        color: `#808080`,
        fontSize: 11,
        marginLeft: 10,
    },
    topPostDots: {
        alignSelf: 'center',
        // justifyContent: 'screenLeft',
    },
    midPostImg: {
        width: '100%',
        height: 250
    },
    midPostBg: {
        backgroundColor: '#000',
        height: 150,
        width: '100%',
    },
    midPostDesc: {
        marginTop: 15,
        color: '#fff',
        fontSize: 15,
    },
    midPostHash: {
        color: '#808080',
        flexDirection: 'row',
    },
    botPostBg: {
        backgroundColor: '#000',
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    botPostInfo: {
        color: '#83BAEC',
        fontSize: 16,
        marginLeft: 7,
        marginRight: 30,

    },
    botPostRow: {
        flexDirection: 'row',
    },
    swapCompBase: {
        height: 70,
        width: '100%',
        backgroundColor: '#000',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderBottomColor: '#808080'
    },
    swapCompDiv: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    swapCompLetter: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});