// import "react-native";
import React from "react";
// import App from "../App.tsx";

// Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react-native";
import RestaurantListScreen from "../screens/restaurant-list-screen";
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

it("renders correctly on load", () => {
  const { getAllByText, getByPlaceholderText } = render(
    <RestaurantListScreen />
  );
  expect(getAllByText("Search").length).toBe(1);
  getByPlaceholderText("Outcode");
});

it("shows error on empty search text input", () => {
  const { getAllByText, getByPlaceholderText, getByTestId } = render(
    <RestaurantListScreen />
  );
  fireEvent.changeText(getByTestId("search-restaurants-input"), "");

  fireEvent.press(getByTestId("search-restaurants-button"));

  expect(getAllByText("Empty text").length).toBe(1);
});

it("hides error message on validated input", () => {
  fetch.mockResponseOnce(JSON.stringify(mockData));
  const {
    getAllByText,
    getByPlaceholderText,
    getByTestId,
    queryAllByText,
    getByText,
  } = render(<RestaurantListScreen />);
  fireEvent.changeText(getByTestId("search-restaurants-input"), "");
  fireEvent.press(getByTestId("search-restaurants-button"));
  expect(getAllByText("Empty text").length).toBe(1);
  fireEvent.changeText(getByTestId("search-restaurants-input"), "valid input");
  fireEvent.press(getByTestId("search-restaurants-button"));
  expect(queryAllByText("Empty text").length).toBe(0);
});

it("shows all correct restaurants on search", async () => {
  fetch.mockResponseOnce(JSON.stringify(mockData));
  const {
    getAllByText,
    getByPlaceholderText,
    getByTestId,
    queryAllByText,
    getByText,
  } = render(<RestaurantListScreen />);

  fireEvent.changeText(
    getByTestId("search-restaurants-input"),
    "valid outcode"
  );
  await fireEvent.press(getByTestId("search-restaurants-button"));

  await waitFor(() =>
    expect(getAllByText("Name: La Venice Pizzeria (Wood Fired)").length).toBe(1)
  );
  await waitFor(() => expect(getAllByText("Rating: 5.08").length).toBe(1));
  await waitFor(() =>
    expect(getAllByText("Cuisine Types: Italian | Pizza").length).toBe(1)
  );
  await waitFor(() =>
    expect(
      getAllByText("Name: Bengal Village - Best of Brick Lane").length
    ).toBe(1)
  );
  await waitFor(() => expect(getAllByText("Rating: 5.28").length).toBe(1));
  await waitFor(() =>
    expect(
      getAllByText("Cuisine Types: Indian | Curry | Football deals").length
    ).toBe(1)
  );
});
