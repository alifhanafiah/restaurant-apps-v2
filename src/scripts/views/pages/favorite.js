import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="hero"></div>
      <h2 class="explore__title" id="main-content" tabindex="0">Favorited Restaurant</h2>
      <div class="restaurant__list" id="restaurants"></div>
    `;
  },

  async afterRender() {
    // mengambil semua restaurant pada indexdb
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
