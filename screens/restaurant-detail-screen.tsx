import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function RestaurantDetailScreen({ navigation, route }) {
  const { restaurant } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoView}>
        <Image source={{ uri: restaurant.LogoUrl }} style={styles.logo} />
      </View>

      <View style={styles.details}>
        {Object.keys(restaurant).map((i) => {
          return <Text>{`${i}: ${restaurant[i]}`}</Text>;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  logoView: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    backgroundColor: "#fff",
  },
  logo: {
    width: 70,
    height: 70,
  },
});
