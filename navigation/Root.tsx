import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from '@react-navigation/native';
import Tabs, { TabsStackParams } from './Tabs';
import Details from '../screens/Details';
export type RootStackParams = {
    TabStack: NavigatorScreenParams<TabsStackParams>;
    DetailScreen: undefined
}

const RootStack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name='TabStack' component={Tabs} options={{ headerShown: false }} />
            <RootStack.Screen name="DetailScreen" component={Details} />
        </RootStack.Navigator>
    )
}

export default Root