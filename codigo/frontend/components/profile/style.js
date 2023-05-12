import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default styles = StyleSheet.create({
    topProfileBase: {
        height: 250,
        width: '100%',
        backgroundColor: '#000'
    },
    alignTopComponents: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    profilePicAlign: {
        alignSelf: "center"
    },
    topInfosPos: {
        alignSelf: 'center',
        flexDirection: 'column'
    },
    topProfileName: {
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
    topProfileCharge: {
        fontSize: 10,
        color: '#31A2E3',
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
    topProfileAt: {
        fontSize: 20,
        color: '#808080',
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
    tagsProfileBase: {
        height: 40,
        width: '100%',
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tag: {
        height: 20,
        width: 70,
        borderRadius: 20,
        backgroundColor: '#272E38',
        justifyContent: 'center',
        margin: 2
        
    },
    tagText: {
        color: '#31A2E3',
        fontWeight: 'bold',
        fontSize: 10,
        alignSelf: 'center',
    },
    profileRankBase: {
        height: 60,
        width: '100%',
        backgroundColor: '#000', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileRankTxt: {
        color: '#31A2E3',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 10,
    }
});