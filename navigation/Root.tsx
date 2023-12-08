import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from '@react-navigation/native';
import Tabs, { TabsStackParams } from './Tabs';
import Details from '../screens/Details';
export type RootStackParams = {
    TabStack: NavigatorScreenParams<TabsStackParams>;
    DetailScreen: { id: string }
}

const RootStack = createNativeStackNavigator<RootStackParams>();

export type RootScreenProps<T extends keyof RootStackParams> = NativeStackScreenProps<RootStackParams, T>;

const Root = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name='TabStack' component={Tabs} options={{ headerShown: false }} />
            <RootStack.Screen name="DetailScreen" component={Details} />
        </RootStack.Navigator>
    )
}

export default Root