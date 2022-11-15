import RestaurantSource from '../../data/restaurant-source';

const ActiveRestaurants = {
  async render() {
    return `
      <h2>Now Active Restaurants</h2>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.activeRestaurants();
    console.log(restaurants);

    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ActiveRestaurants;
