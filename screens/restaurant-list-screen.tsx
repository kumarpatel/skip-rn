import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getRestaurantsByPostcode } from "../api/restaurants";
import RestaurantCard from "../components/restaurant-card";
import Search from "../components/search";
import { Restaurant } from "../types/types";
import mockData from "./mockSearchResults.json";

export function useRestaurantSearchByOutcode(defaultSearchTerm: string) {
  const [restaurants, setRestaurants] = useState<[Restaurant] | []>([]);
  const [searchTerm, setSearchTerm] = useState<string>(defaultSearchTerm);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsFetching(true);
    getRestaurantsByPostcode(searchTerm)
      .then((data) => {
        setRestaurants(data.Restaurants);
        setIsFetching(false);
      })
      .catch((e) => {
        console.error(e);
        setError(error);
      });
  }, [searchTerm]);

  return { restaurants, isFetching, searchTerm, setSearchTerm, error };
}

export default function RestaurantListScreen() {
  const navigation = useNavigation();
  const { restaurants, isFetching, searchTerm, setSearchTerm, error } =
    useRestaurantSearchByOutcode("");

  const onRestaurantSelect = useCallback((restaurant) => {
    navigation.navigate("detail", { restaurant });
  }, []);

  const renderRestaurant = useCallback(({ item }) => {
    return (
      <RestaurantCard
        restaurant={item}
        onPress={() => onRestaurantSelect(item)}
      />
    );
  }, []);

  const onSearch = useCallback((searchText: string) => {
    setSearchTerm(searchText);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <Search onSearch={onSearch} />
      </View>
      <View style={styles.resultRow}>
        <FlatList
          refreshControl={
            <RefreshControl
              enabled={true}
              refreshing={isFetching}
              onRefresh={() => {
                setSearchTerm(searchTerm);
              }}
            />
          }
          data={restaurants}
          renderItem={renderRestaurant}
          keyExtractor={(item: Restaurant) => `restaurant-item-${item.Id}`}
        />
      </View>
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
  searchRow: {
    flex: 1,
    width: "100%",
  },
  resultRow: {
    width: "100%",

    flex: 10,
  },
});
