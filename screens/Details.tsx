import { View, Text, Image, StyleSheet, } from 'react-native'
import React, { useLayoutEffect, useRef } from 'react'
import { RootScreenProps } from '../navigation/Root'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icons from "@expo/vector-icons/MaterialIcons"
import { useTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image6 } from '../assets/images'
import BottomSheet from '@gorhom/bottom-sheet'
const Details = ({ navigation, route }: RootScreenProps<"DetailScreen">) => {
    const { colors } = useTheme()
    const bottomSheetRef = useRef<BottomSheet>(null)
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [])
    return (
        <View style={{ flex: 1, }}>
            <Image
                source={Image6}
                resizeMode='cover'
                style={{ flex: 1 }}
            />
            <SafeAreaView edges={["top"]} style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
                {/* <Statusbar style={"light"}/> */}
                <View style={{ flexDirection: "row", alignItems: "center", padding: 20, gap: 8 }}>
                    <TouchableOpacity style={{ width: 52, aspectRatio: 1, alignItems: "center", justifyContent: "center", borderRadius: 52, borderWidth: 1, borderColor: "#fff" }} onPress={() => navigation.goBack()}>
                        <Icons name='arrow-back' size={24} color={"#fff"} />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity style={{ width: 52, aspectRatio: 1, alignItems: "center", justifyContent: "center", borderRadius: 52, borderWidth: 1, borderColor: "#fff" }} >
                        <Icons name='favorite-border' size={24} color={"#fff"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 52, aspectRatio: 1, alignItems: "center", justifyContent: "center", borderRadius: 52, borderWidth: 1, borderColor: "#fff" }} >
                        <Icons name='add-shopping-cart' size={24} color={"#fff"} />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
            {/* <BottomSheet snapPoints={[100, 600]} index={0}>
                <View>
                    <Text>Hello</Text>
                </View>
            </BottomSheet> */}
        </View>
    )
}

export default Details