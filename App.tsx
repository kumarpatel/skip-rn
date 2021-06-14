import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ToggleStorybook } from "./storybook/toggle-storybook";
import RestaurantListScreen from "./screens/restaurant-list-screen";
import RestaurantDetailScreen from "./screens/restaurant-detail-screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ToggleStorybook>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: "Restaurant List",
            }}
            name="home"
            component={RestaurantListScreen}
          />
          <Stack.Screen
            options={{
              title: "Restaurant Detail",
            }}
            name="detail"
            component={RestaurantDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ToggleStorybook>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
