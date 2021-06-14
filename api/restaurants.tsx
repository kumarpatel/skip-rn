const getRestaurantsByPostcode = (postcode: string) => {
  return fetch(
    `https://uk.api.just-eat.io/restaurants/bypostcode/${postcode}`
  ).then((data) => data.json());
};

export { getRestaurantsByPostcode };
