/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */

import * as React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { StoryScreen, Story, UseCase } from "./../../storybook/views";
import mockRestaurantData from "./mockRestaurantData.json";
// import { color } from "../../theme"
import RestaurantCard from "../../components/restaurant-card";

declare let module;

const VIEWSTYLE = {
  flex: 1,
  backgroundColor: "white",
};
const viewStyleArray: ViewStyle[] = [VIEWSTYLE, { backgroundColor: "#7fff00" }];

storiesOf("RestaurantCard", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Ideal Restaurant Card", () => (
    <Story>
      <UseCase text="default" usage="Displays all top level info">
        <View style={VIEWSTYLE}>
          <RestaurantCard
            restaurant={mockRestaurantData.Restaurants[0]}
            onPress={() => {}}
          />
        </View>
      </UseCase>
      <UseCase
        text="Missing Cuisine Types"
        usage="Displays card without Cusine Types"
      >
        <View style={VIEWSTYLE}>
          <RestaurantCard
            restaurant={{
              Id: 80086,
              Name: "La Venice Pizzeria (Wood Fired)",
              Rating: {
                Count: 842,
                Average: 5.08,
                StarRating: 5.08,
              },
              LogoUrl:
                "http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/80086.gif",
            }}
            onPress={() => {}}
          />
        </View>
      </UseCase>

      <UseCase
        text="Long Restaurant Name"
        usage="Displays card with long restaurant name"
      >
        <View style={VIEWSTYLE}>
          <RestaurantCard
            restaurant={{
              Id: 80086,
              Name: "La Venice Pizzeria (Wood Fired) this is a long restaurant name",
              Rating: {
                Count: 842,
                Average: 5.08,
                StarRating: 5.08,
              },
              LogoUrl:
                "http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/80086.gif",
            }}
            onPress={() => {}}
          />
        </View>
      </UseCase>
    </Story>
  ));
