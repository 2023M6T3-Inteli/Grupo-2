import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272E38',
        marginHorizontal: 50,
        marginVertical: 250,
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
    },

    text: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: 16,
        margin: 10,

    },

    tags: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 10,
        color: '#31A2E3',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 5,
    },

    tagDiv: {
        flexDirection: 'row',
    },

    button: {
        color: '#31A2E3',
        alignSelf: 'flex-end',
        marginRight: 10,
        marginTop: 10,
        
    },
  });