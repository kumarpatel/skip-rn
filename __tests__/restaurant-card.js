import React from "react";
import renderer from "react-test-renderer";
import RestaurantCard from "../components/restaurant-card";
import mockData from "./mockSearchResults.json";

it("Snapshot - RestaurantCard", () => {
  const tree = renderer
    .create(
      <RestaurantCard restaurant={mockData.Restaurants[0]} onPress={() => {}} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
