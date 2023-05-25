import { useCallback, useState, useEffect, useRef } from "react";

import { View, Text, TextInput, Image, Button, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

import { useFonts } from "expo-font"
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { storeData } from "../../scripts/setStorageUser"
import { getData } from "../../scripts/getStorageUser"

import { styles } from "./style"
import { URL_API } from "../../api";

export default function Login() {

    const navigation = useNavigation()

    const [nameInput, setNameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")


    // state for text
    const [text, setText] = useState("Hello Again !")
    const listaTextos = ["H", "He", "Hel", "Hell", "Hello", "Hello A", "Hello Ag", "Hello Aga", "Hello Agai", "Hello Again", "Hello Again !"];
    const tempoTroca = 200; // troca de texto a cada 0.2 segundos


    useEffect(() => {
        const intervalId = setInterval(() => {
            const indiceAtual = listaTextos.indexOf(text);
            const novoIndice = indiceAtual === listaTextos.length - 1 ? 0 : indiceAtual + 1;
            setText(listaTextos[novoIndice]);
        }, tempoTroca);

        return () => clearInterval(intervalId);
    }, [listaTextos, tempoTroca, text]);

    // Use fonts in react native

    const [fontsLoaded] = useFonts({
        "Montserrat": require("../../assets/fonts/Montserrat/Montserrat-Black.ttf"),
        "Montserrat-Light": require("../../assets/fonts/Montserrat/Montserrat-Light.ttf"),
    })

    SplashScreen.preventAutoHideAsync();

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const loginAPI = async () => {
        try {
            const response = await fetch(`${URL_API}/user/login`, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: nameInput,
                    password: passwordInput
                })
            })
            const json = await response.json();
            storeData(json)

            navigation.navigate("Start")


        } catch (error) {
            console.error(error);
        }
    };

    // function for implements integration login
    const loginFunction = async () => {

        loginAPI()

        // navigation.navigate("Start")
    }


    return (
        <SafeAreaView onLayout={onLayoutRootView}>
            <ScrollView>


                <View style={{}}>
                    <Image
                        source={require("../../assets/imageLogin.png")}
                        style={{ width: "100%" }}
                    />
                </View>
                <View style={{}}>
                    <LinearGradient colors={['#3069AE', '#295480', '#295A95']} style={{ height: 550 }}>
                        <Text style={styles.hello}>{text}</Text>


                        <View style={{ flex: 1, alignSelf: "center", marginTop: 90, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={require("../../assets/Icons/user.png")}
                                style={{ position: "absolute", top: 8, left: 13, resizeMode: "contain", width: 25 }} />

                            <Image
                                source={require("../../assets/Icons/key.png")}
                                style={{ position: "absolute", top: 83, left: 13, resizeMode: "contain", width: 25 }} />

                            <View>
                                <TextInput value={nameInput} onChangeText={setNameInput} style={styles.inputText} placeholder="Username" placeholderTextColor="white" />
                                <TextInput value={passwordInput} onChangeText={setPasswordInput} style={styles.inputText} placeholder="Password" placeholderTextColor="white" secureTextEntry={true} />
                            </View>
                        </View>

                        <View style={{ marginTop: 50 }}>
                            <LinearGradient colors={['#3EACDB', '#4164E1']}
                                style={{
                                    width: 240,
                                    height: 56,
                                    borderRadius: 30,
                                    padding: 5,

                                    alignSelf: "center",
                                    alignItems: "center",
                                    justifyContent: "center"

                                }} >


                                <Pressable onPress={loginFunction}>
                                    <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
                                </Pressable>
                            </LinearGradient>
                        </View>

                        <Image
                            source={require("../../assets/DELLTech.png")}
                            style={styles.imageDell}
                        />


                    </LinearGradient>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

