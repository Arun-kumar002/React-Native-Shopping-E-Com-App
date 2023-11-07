import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Root from './navigation/Root';
import { useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
export default function App() {
  const theme = useMemo(() => {
    return { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: "#f5f5f5", text: "#191919", border: "#D9D9D9", primary: "#191919" } }
  }, [])
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer theme={theme}>
          <BottomSheetModalProvider>
            <Root />
            <StatusBar style='dark' />
          </BottomSheetModalProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
