import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tabs } from "./pages/tab";
import Login from "./pages/Login";
import { Shop } from "./pages/feedshop";

const Stack = createNativeStackNavigator()

export function Routes() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={({ route }) => ({
        })}>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Shop" component={Shop} />
            <Stack.Screen name="Start" component={Tabs} options={{ headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }} />
        </Stack.Navigator>
    )
}