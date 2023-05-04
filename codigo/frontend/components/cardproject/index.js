import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button} from 'react-native-elements';

import styles from './style';


export function CardProject(){
    return (
    <View style={styles.container}>

        <Card>
            <Card.Title>Projeto teste</Card.Title>
            <Card.Divider/>

            <Text style={{marginBottom: 10}}>
                Esse card foi feito para testar o componente Card do react-native-elements, passei uma cota tentando fazer funcionar, mas agora deu certo. Obrigado Copilot
            </Text>
            <Button
                icon={{name: 'code'}}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='SAIBA MAIS'
                onPress={() => {alert('FUNCIONOU')}} />
        </Card>

        <StatusBar style="auto" />
    </View>
    )
}