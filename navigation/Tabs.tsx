import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../screens/Home'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'
import Payment from '../screens/Payment'
import Icons from "@expo/vector-icons/MaterialIcons"
import { CompositeScreenProps } from '@react-navigation/native'
import { RootScreenProps } from './Root'
export type TabsStackParams = {
    Home: undefined,
    Cart: undefined,
    Profile: undefined,
    Payment: undefined
}

const TabsStack = createBottomTabNavigator();

export type TabsStackScreenProps<T extends keyof TabsStackParams> = CompositeScreenProps<BottomTabScreenProps<TabsStackParams, T>, RootScreenProps<"TabStack">>
const Tabs = () => {
    return (
        <TabsStack.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <TabsStack.Screen name='Home' component={Home} options={{ tabBarIcon(prob) { return <Icons name="home" {...prob} /> } }} />
            <TabsStack.Screen name='Cart' component={Cart} options={{ tabBarIcon(prob) { return <Icons name="shopping-cart" {...prob} /> } }} />
            <TabsStack.Screen name='Payment' component={Payment} options={{ tabBarIcon(prob) { return <Icons name="account-balance-wallet" {...prob} /> } }} />
            <TabsStack.Screen name='Profile' component={Profile} options={{ tabBarIcon(prob) { return <Icons name="person" {...prob} /> } }} />
        </TabsStack.Navigator>
    )
}

export default Tabs