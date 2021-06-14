import React, { useCallback, useState, useEffect, StatusBar } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Cuisine, Rating, Restaurant } from "../types/types";

interface SearchProps {
  onSearch: (searchText: string) => void;
}

export default function SearchCard({ onSearch }: SearchProps) {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSearchCallback = useCallback((text) => {
    if (text === "") {
      setError("Empty text");
      return;
    }
    onSearch(text);
    setError(null);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputCol}>
          <TextInput
            testID="search-restaurants-input"
            numberOfLines={1}
            editable
            maxLength={40}
            placeholder="Outcode"
            style={styles.searchInput}
            value={searchInput}
            onChangeText={setSearchInput}
            onSubmitEditing={(e) => {
              onSearchCallback(e.nativeEvent.text);
            }}
          />
        </View>

        <View style={styles.buttonCol}>
          <Pressable
            testID="search-restaurants-button"
            onPress={() => {
              onSearchCallback(searchInput);
            }}
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.errorView}>
        {error && (
          <Text testID="search-validation-error" style={styles.errorText}>
            {error}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    // borderWidth: 2,
    // borderColor: "blue",
  },
  innerContainer: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#fff",
    // borderWidth: 2,
    // borderColor: "green",
  },

  errorView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,

    // borderWidth: 2,
    // borderColor: "red",
  },
  inputCol: {
    flex: 8,
  },

  buttonCol: {
    flex: 2,
    backgroundColor: "green",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  searchInput: {
    flex: 1,
    borderRadius: 25,
    elevation: 10,
    backgroundColor: "#f2f2f2",

    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderColor: "#cccccc",
  },
  searchButtonText: {
    color: "white",
  },
  errorText: {
    color: "red",
  },
});
