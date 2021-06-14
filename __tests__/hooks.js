// import "react-native";
import React from "react";
// import App from "../App.tsx";
import { renderHook } from "@testing-library/react-hooks";

// Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react-native";
import RestaurantListScreen, {
  useRestaurantSearchByOutcode,
} from "../screens/restaurant-list-screen";
import mockData from "./mockSearchResults.json";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe("useRestaurantSearchByOutcode tests", () => {
  it("verifies that it returns correct number of restaurants given a valid search term", () => {
    const { restaurants } = renderHook(() =>
      useRestaurantSearchByOutcode("valid search term")
    );
    console.log(restaurants);
    expect(restaurants.current.length).toBe(2);
  });
});
