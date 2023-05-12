import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ranking from "./Rank";
import { FeedPost } from "./feedposts";
import CreateProject from "./CreateProject";
import { Profile } from "./pofile";
import { View, Text } from "react-native";
import { Search } from "./Search";
import { Shop } from "./feedshop";

const Tab = createBottomTabNavigator();

export function Tabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: "black" },
            tabBarActiveTintColor: "#3069AE"
        })}>
            <Tab.Screen name="Home" component={FeedPost} options={{ headerShown: false, }} />
            <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Tab.Screen name="+" component={CreateProject} options={{ headerShown: false }} />
            <Tab.Screen name="Rank" component={Ranking} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}