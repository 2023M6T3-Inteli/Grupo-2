import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import { ShopCard } from "../../components/shopCard";
import { SmallShopCard } from "../../components/shopCardSmall";
import { styles } from "../feedshop/style";


export function Shop() {
    return (
        <SafeAreaView >

            <ScrollView>

                <View>

                    <View style={styles.top}>
                        <Image source={require('../../assets/coins.png')} style={styles.coin} ></Image>
                        <Text style={styles.value}>
                            3000
                        </Text>
                    </View>
                    {/* <Text style={styles.text}>Oi</Text> */}
                    <ShopCard />

                    <View>
                        <SmallShopCard />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>

    )

}

