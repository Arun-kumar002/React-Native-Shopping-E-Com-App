import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Image1, Image2, Image4, Image6, Image7 } from '../assets/images'
import { useTheme } from '@react-navigation/native'
import Icons from "@expo/vector-icons/MaterialIcons"
import MasonryList from '@react-native-seoul/masonry-list';
import { BlurView } from "expo-blur";
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { BottomSheet } from 'react-native-btr';
import FilterView from '../src/components/FilterView'
const category = ["Clothing", "Shoes", "Accessories", "Fashion", "Offer", "Brand"]
const Home = () => {
    const { colors } = useTheme();
    const [categoryIndex, setCategoryIndex] = useState(0);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const openFilterModal = useCallback(() => {
        console.log(bottomSheetModalRef.current)
        if (bottomSheetModalRef.current) {
            bottomSheetModalRef.current?.present();
        }
    }, [bottomSheetModalRef.current]);

    const [visible, setVisible] = useState(true);
    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };
    return (
        <>

            <ScrollView>
                <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
                    {/* Profile Section */}
                    <View style={{ paddingHorizontal: 24, paddingVertical: 24, flexDirection: "row", gap: 8, alignItems: "center" }}>
                        <Image
                            style={{ width: 52, aspectRatio: 1, borderRadius: 52 }}
                            source={Image4}
                            resizeMode='cover'
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8, color: colors.text }} numberOfLines={1}>Hi, Arun </Text>
                            <Text style={{ opacity: 0.5, color: colors.text }} numberOfLines={1}>Discover fashion that suit your style</Text>
                        </View>
                        <TouchableOpacity style={{ width: 52, aspectRatio: 1, alignItems: "center", justifyContent: "center", borderRadius: 52, borderWidth: 1, borderColor: colors.border }}>
                            <Icons name='notifications' size={24} color={colors.text} />
                        </TouchableOpacity>
                    </View>
                    {/* Search Section */}
                    <View style={{ flexDirection: "row", gap: 12, paddingHorizontal: 24 }}>
                        <TouchableOpacity style={{ flex: 1, height: 52, borderRadius: 52, borderWidth: 1, borderColor: colors.border, alignItems: "center", paddingHorizontal: 24, gap: 12, flexDirection: "row" }}>
                            <Icons name='search' size={24} color={colors.text} style={{ opacity: 0.5 }} />
                            <Text style={{ flex: 1, fontSize: 16, color: colors.text, opacity: 0.5 }}>Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 52, aspectRatio: 1, alignItems: "center", justifyContent: "center", borderRadius: 52, borderWidth: 1, backgroundColor: colors.primary }} onPress={toggleBottomNavigationView}>
                            <Icons name='tune' size={24} color={colors.background} />
                        </TouchableOpacity>
                    </View>

                    {/* Collection View */}
                    <View style={{ paddingHorizontal: 24 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                            <Text style={{ fontSize: 22, fontWeight: "700" }}>New Collections</Text>
                            <TouchableOpacity>
                                <Text>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", height: 200, gap: 12 }}>
                            {/* card */}

                            <View style={{ flex: 1 }}>  <Card /></View>
                            <View style={{ flex: 1, gap: 12 }}>
                                <Card />
                                <Card />
                            </View>
                        </View>
                    </View>
                    {/* Categories */}
                    <View>
                        <FlatList data={category} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }} renderItem={({ item, index }) => {
                            const isSelected = categoryIndex === index;
                            return <TouchableOpacity style={{ backgroundColor: isSelected ? colors.primary : colors.card, paddingHorizontal: 24, paddingVertical: 16, borderRadius: 100, borderWidth: isSelected ? 0 : 1, borderColor: colors.border }} onPress={() => setCategoryIndex(index)}>
                                <Text style={{ color: isSelected ? colors.background : colors.text, fontWeight: "600", fontSize: 16, opacity: isSelected ? 1 : 0.5 }}>{item}</Text>
                            </TouchableOpacity>
                        }} />
                    </View>

                    <MasonryList
                        data={[12, 32, 13, 15, 66]}
                        keyExtractor={(item): string => item}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        style={{ gap: 12 }}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                        renderItem={({ item, i }) => (
                            <View style={{ padding: 6 }}>
                                <View style={{ aspectRatio: i === 0 ? 1 : (2 / 3), position: "relative", overflow: "hidden", borderRadius: 24 }}>
                                    <Image
                                        source={Image6}
                                        resizeMode='cover'
                                        style={StyleSheet.absoluteFill}
                                    />
                                    <View style={[StyleSheet.absoluteFill, { padding: 12 }]}>
                                        <View style={{ flexDirection: "row", gap: 8, padding: 4 }}>
                                            <Text style={{ flex: 1, fontSize: 14, fontWeight: "600", color: colors.text }} numberOfLines={1}>PUMA Everyday Hassle</Text>
                                            <View style={{ backgroundColor: colors.background, borderRadius: 100, height: 32, aspectRatio: 1, alignItems: "center", justifyContent: "center" }}>
                                                <Icons name='favorite-border' size={20} color={colors.text} />
                                            </View>
                                        </View>
                                        <View style={{ flex: 1 }} />
                                        <BlurView style={{ flexDirection: "row", alignItems: "center", backgroundColor: "rgba(0,0,0,0.55)", padding: 8, borderRadius: 100, overflow: "hidden" }} intensity={20}>
                                            <Text style={{ flex: 1, fontSize: 16, fontWeight: "600", color: "#fff", marginLeft: 4 }} numberOfLines={1}>$160.00</Text>
                                            <TouchableOpacity style={{ paddingHorizontal: 16, paddingVertical: 6, borderRadius: 100, backgroundColor: "#fff" }}>
                                                <Icons name='add-shopping-cart' size={20} color={"#000"} />
                                            </TouchableOpacity>
                                        </BlurView>
                                    </View>
                                </View>
                            </View>
                        )}
                        onEndReachedThreshold={0.1}
                    />


                </SafeAreaView>
                <BottomSheet
                    visible={visible}
                    onBackButtonPress={toggleBottomNavigationView}
                    onBackdropPress={toggleBottomNavigationView}
                >
                    <FilterView onClose={toggleBottomNavigationView} />

                </BottomSheet>
            </ScrollView>

        </>
    )
}

export default Home


const Card = ({ price = "$130", url = Image1 }) => {
    return (
        <View style={{ flex: 1, height: 200, position: "relative", overflow: "hidden", borderRadius: 24 }}>
            <Image source={url} resizeMode='cover' style={StyleSheet.absoluteFill} />
            <View style={{ position: "absolute", left: 16, top: 16, paddingHorizontal: 16, paddingVertical: 12, backgroundColor: "rgba(0,0,0,0.25)", borderRadius: 100 }}>
                <Text style={{ fontSize: 14, fontWeight: "500", color: "#fff" }}>{price}</Text>
            </View>
        </View>
    )
}