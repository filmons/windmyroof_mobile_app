import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./src/TabNavigator/TabNavigator";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#66BFF1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "40px",
            padding: "0 20px",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="WindMyRoof" component={HomeScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
