import { View, Text, Image, } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { RootScreenProps } from '../navigation/Root'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icons from "@expo/vector-icons/MaterialIcons"
import { useTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image1 } from '../assets/images'

const Details = ({ navigation, route }: RootScreenProps<"DetailScreen">) => {
    const { colors } = useTheme()
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [])
    return (
        <View style={{ flex: 1, }}>
            <SafeAreaView edges={["top"]}>
                <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
                    <TouchableOpacity style={{ width: 52, aspectRatio: 1, alignItems: "center", justifyContent: "center", borderRadius: 52, borderWidth: 1, borderColor: colors.border }}>
                        <Icons name='arrow-back' size={24} color={colors.text} />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
            <Image
                source={Image1}
            />
        </View>
    )
}

export default Details