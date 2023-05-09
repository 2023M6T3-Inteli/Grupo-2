import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flexShrink: 1,
        backgroundColor: '#192028',
        width: 350,
        height: 325,
        borderRadius: 10,
        padding: 10,
        margin: 50,
    },

    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
        padding: 5,
    },

    leadersDiv:{
        flexDirection: 'row',
        marginTop: 10,
        padding: 5,
    },

    leadersText:{
        color: '#fff',
        fontSize: 13,
        marginLeft: 25,
        padding: 5,
    },

    text: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: 16,
        margin: 10,
        padding: 5,

    },

    tags: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 10,
        color: '#31A2E3',
        backgroundColor: '#272E38',
        borderRadius: 10,
        marginTop: 5,
        padding: 5,
    },

    tagDiv: {
        flexDirection: 'row',
        padding: 5,
    },

    button: {
        fontFamily: 'Roboto',
        color: '#31A2E3',
        alignSelf: 'flex-end',
        marginRight: 10,
        marginTop: 10,
        padding: 5,
        
    },
  });