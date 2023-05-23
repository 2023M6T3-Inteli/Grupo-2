import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { ShopCard } from "../../components/shopCard";
import { SmallShopCard } from "../../components/shopCardSmall";
import { styles } from "../feedshop/style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


export function Shop() {
    return (
        <SafeAreaView >
            <ScrollView>
                <View style={{ backgroundColor: "black", height: 800 }}>
                    <View style={styles.top}>
                        <Image source={require('../../assets/coins.png')} style={styles.coin} ></Image>
                        <Text style={styles.value}>
                            3000
                        </Text>
                    </View>

                    <ShopCard />

                    <View>
                        <SmallShopCard />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

