import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./screens/MainScreen";
import InfoScreen from "./screens/InfoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Início" }}
        />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{ title: "Sobre" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
