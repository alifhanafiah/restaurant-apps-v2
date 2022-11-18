import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="hero"></div>
      <h2 class="explore__title" id="main-content" tabindex="0">Detail of Restaurant</h2>
      <div class="restaurant__detail" id="restaurant"></div>
      <div class="lds-facebook"><div></div><div></div><div></div></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        name: restaurant.name,
        description: restaurant.description,
      },
    });

    const loader = document.querySelector('.lds-facebook');
    loader.style.display = 'none';
  },
};

export default Detail;
