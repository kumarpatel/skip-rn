import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RestaurantDetailScreen() {
  return (
    <View style={styles.container}>
      <Text>RestaurantDetailScreen</Text>
    </View>
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
