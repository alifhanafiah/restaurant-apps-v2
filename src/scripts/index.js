import 'regenerator-runtime'; /* for async await transpile */
import data from '../DATA.json';
import '../styles/main.scss';

// responsive burger menu
const burger = document.querySelector('#hamburger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// take data for restaurant list
const restaurants = data.restaurants;

let output = '';

for (let restaurant of restaurants) {
  output += `
    <div class="restaurant__item">
      <div class="card__header">
        <div class="card__header__location">${restaurant.city}</div>
        <img
          class="card__header__image"
          src=${restaurant.pictureId}
          alt=""
        />
      </div>
      <div class="card__body">
        <div class="card__body__rating">
          Rating: <span id="rating">${restaurant.rating}</span>
        </div>
        <div class="card__body__name">${restaurant.name}</div>
        <div class="card__body__description">
          ${restaurant.description}
        </div>
      </div>
    </div>
  `;
}

// put cards on document
document.querySelector('.restaurant__list').innerHTML = output;
