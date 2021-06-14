import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import RestaurantCard from "../components/restaurant-card";
import { Deal } from "../types/types";

export default function RestaurantDetailScreen({ navigation, route }) {
  const { restaurant } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RestaurantCard restaurant={restaurant} />
      <View style={styles.details}>
        <Text>Address:</Text>
        <Text>{`${restaurant.Address.FirstLine}`}</Text>
        <Text>{`${restaurant.Address.City} ${restaurant.Address.Postcode}`}</Text>
        <Text>{""}</Text>

        <Text>
          Opening Time: {new Date(restaurant.OpeningTime).toLocaleTimeString()}
        </Text>
        <Text>
          Delivery Time:{" "}
          {new Date(restaurant.DeliveryTime).toLocaleTimeString()}
        </Text>
        <Text>{""}</Text>

        <Text>Deals:</Text>
        {restaurant.Deals.length > 0 ? (
          restaurant.Deals.map((deal: Deal) => {
            return <Text>{deal.Description}</Text>;
          })
        ) : (
          <Text>No deals available today</Text>
        )}
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
