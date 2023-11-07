import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../screens/Home'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'
import Payment from '../screens/Payment'
import Icons from "@expo/vector-icons/MaterialIcons"
export type TabsStackParams = {
    Home: undefined,
    Cart: undefined,
    Profile: undefined,
    Payment: undefined
}

const TabsStack = createBottomTabNavigator()
const Tabs = () => {
    return (
        <TabsStack.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <TabsStack.Screen name='Home' component={Home} options={{ tabBarIcon(probs) { return <Icons name="home" {...probs} /> } }} />
            <TabsStack.Screen name='Cart' component={Cart} options={{ tabBarIcon(probs) { return <Icons name="shopping-cart" {...probs} /> } }} />
            <TabsStack.Screen name='Payment' component={Payment} options={{ tabBarIcon(probs) { return <Icons name="account-balance-wallet" {...probs} /> } }} />
            <TabsStack.Screen name='Profile' component={Profile} options={{ tabBarIcon(probs) { return <Icons name="person" {...probs} /> } }} />
        </TabsStack.Navigator>
    )
}

export default Tabs