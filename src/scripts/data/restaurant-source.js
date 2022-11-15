import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async activeRestaurants() {
    const response = await fetch(API_ENDPOINT.ACTIVE_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
