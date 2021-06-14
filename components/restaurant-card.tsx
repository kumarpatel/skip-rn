import React, { useCallback, useState, useEffect, StatusBar } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Cuisine, Rating, Restaurant } from "../types/types";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onPress?: () => void;
}

export default function RestaurantCard({
  restaurant,
  onPress,
}: RestaurantCardProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: restaurant.LogoUrl }} style={styles.tinyLogo} />
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Name: {restaurant.Name}</Text>
          </View>
          <View style={styles.col}>
            <Text>Rating: {restaurant.Rating.StarRating}</Text>
          </View>
          <View style={styles.col}>
            <Text>
              Cuisine Types:{" "}
              {restaurant.CuisineTypes
                ? restaurant.CuisineTypes.map(({ Name }: Cuisine) => Name).join(
                    " | "
                  )
                : "N/A"}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",

    // margin: 0,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,

    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "grey",
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  logo: {
    width: 66,
    height: 58,
  },
  row: {
    display: "flex",
    flexDirection: "column",
    // borderWidth: 2,
    // borderColor: "red",
  },
  col: {
    display: "flex",
    flexDirection: "row",
  },
});
