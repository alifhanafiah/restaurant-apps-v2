const ActiveRestaurants = {
  async render() {
    return `
      <h2>Now Active Restaurants</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ActiveRestaurants;
