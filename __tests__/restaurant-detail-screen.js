import React from "react";
import renderer from "react-test-renderer";
import RestaurantDetailScreen from "../screens/restaurant-detail-screen";
import mockData from "./mockSearchResults.json";

it("Snapshot - RestaurantDetailScreen", () => {
  const tree = renderer
    .create(
      <RestaurantDetailScreen
        route={{
          params: {
            restaurant: mockData.Restaurants[0],
          },
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
