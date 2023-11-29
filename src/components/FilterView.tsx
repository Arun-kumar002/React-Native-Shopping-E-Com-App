import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import Icons from "@expo/vector-icons/MaterialIcons"
import { COLORS, SLEEVES } from '../store/const';

interface IProps {
    onClose: () => void
}


const MIN_PRICE = 0;
const MAX_PRICE = 5000;
const FilterView = ({ onClose }: IProps) => {
    const [minPrice, setMinPrice] = useState(1000);
    const [maxPrice, setMaxPrice] = useState(2000);
    const [isSelected, setIsSelected] = useState(0);
    const [isColors, setIsColors] = useState(0);
    const [isSleeves, setIsSleeves] = useState(0);

    const { colors } = useTheme();

    return (
        <ScrollView style={{ padding: 24, width: "100%", height: "100%", backgroundColor: "#e5e5e5" }}>
            <View style={{ flex: 1, gap: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 24, marginBottom: 10, }}>
                    <Text style={{ flex: 1, fontSize: 20, fontWeight: "700", color: colors.text }}>Filters</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={{ color: colors.text }}>Reset</Text>
                    </TouchableOpacity>
                </View>
                {/* Select Price Range */}
                <View>
                    <Text style={{ color: colors.text, marginBottom: 24 }}>Price Range</Text>
                    <View style={{ height: 1, width: "100%", backgroundColor: colors.border, position: "relative" }}>
                        <View style={{ position: "absolute", left: `${(100 * minPrice) / MAX_PRICE}%`, width: `${(100 * (maxPrice - minPrice)) / MAX_PRICE}%`, height: "100%", backgroundColor: colors.notification }}>
                            {/* <View style={{ position: "absolute", left: "10%", height: 24, aspectRatio: 1, borderRadius: 100, borderColor: colors.text, borderWidth: 1, backgroundColor: colors.notification, top: -12, transform: [{ translateX: -12, translateY: -12 }] }}>
                            <View style={{ width: 3, height: 3, borderRadius: 10, backgroundColor: colors.notification }}></View>
                        </View> */}
                            <View style={{ position: "absolute", left: "10%" }}>
                                <SliderHandle />
                            </View>
                            <View style={{ position: "absolute", left: "50%" }}>
                                <SliderHandle />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
                        <Text style={{ color: colors.text, opacity: 0.5 }}>${MIN_PRICE}</Text>
                        <Text style={{ color: colors.text, opacity: 0.5 }}>${MAX_PRICE}</Text>
                    </View>

                    {/*Sports  */}
                    <View style={{ paddingHorizontal: 24, marginTop: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10, color: colors.text }}>Sports</Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
                            {
                                new Array(10).fill("").map((v, i) => {
                                    return (
                                        <Chip
                                            onSelect={setIsSelected}
                                            selected={isSelected}
                                            i={i}
                                            left={undefined}
                                            label='white'
                                        />
                                    )
                                })
                            }
                        </View>
                    </View>
                    {/*Colors  */}
                    <View style={{ paddingHorizontal: 24, marginTop: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10, color: colors.text }}>Colors</Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
                            {
                                COLORS.map((v, i) => {
                                    return (
                                        <Chip
                                            onSelect={setIsColors}
                                            selected={isColors}
                                            i={i}
                                            left={<View style={{ backgroundColor: v.color, width: 8, height: 8, borderRadius: 8 }}></View>}
                                            label={`${v.label} [${v.itemCount}]`}
                                            item={v}

                                        />
                                    )
                                })
                            }
                        </View>
                    </View>
                    {/* Sleeves */}
                    <View style={{ paddingHorizontal: 24, marginTop: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10, color: colors.text }}>Sleeves</Text>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
                            {
                                SLEEVES.map((v, i) => {
                                    return (
                                        <Chip
                                            onSelect={setIsSleeves}
                                            selected={isSleeves}
                                            i={i}
                                            left={undefined}
                                            label={`${v.label} [${v.itemCount}]`}
                                            item={v}

                                        />
                                    )
                                })
                            }
                        </View>
                    </View>

                    <View style={{ flex: 1 }}></View>
                    <SafeAreaView style={{ padding: 24 }}>
                        <TouchableOpacity style={{ backgroundColor: colors.primary, height: 64, borderRadius: 64, alignItems: "center", justifyContent: "center", position: "relative" }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", color: colors.background }}>Apply filters</Text>
                            <View style={{ backgroundColor: colors.card, width: 40, aspectRatio: 1, borderRadius: 40, alignItems: "center", justifyContent: "center", position: "absolute", top: 12, right: 12, bottom: 12 }}><Icons name='arrow-forward' size={24} color={colors.text} /></View>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
            </View>
        </ScrollView>
    )
}

export default FilterView

interface IChipProps {
    i: number,
    onSelect: Dispatch<SetStateAction<number>>
    selected: number
    item?: { [key: string]: any }
    left: ReactNode
    label?: string
}
const Chip = ({ i, onSelect, selected, item, left, label }: IChipProps) => {
    const { colors } = useTheme();
    const isSelect = selected == i

    return <TouchableOpacity onPress={() => onSelect(i)}>
        <View key={i}
            style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 100, backgroundColor: isSelect ? colors.text : colors.background, flexDirection: "row", alignItems: "center" }}>
            {
                left ? <View style={{ marginRight: 4 }}>{left}</View> : <></>
            }
            <Text style={{ fontSize: 14, fontWeight: "600", color: isSelect ? colors.background : colors.text }}>{label}</Text>
        </View>
    </TouchableOpacity>
}





function SliderHandle() {
    const { colors } = useTheme()
    return <View style={{ height: 24, aspectRatio: 1, borderRadius: 100, borderColor: colors.primary, borderWidth: 1, backgroundColor: colors.background, top: -12, transform: [{ translateX: -12, translateY: -12 }], flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: 3, height: 3, borderRadius: 10, backgroundColor: colors.text, }}></View>
    </View>
}