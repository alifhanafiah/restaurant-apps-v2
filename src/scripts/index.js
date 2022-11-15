import 'regenerator-runtime'; /* for async await transpile */

import App from './views/app';

import '../styles/main.scss';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// import data from '../DATA.json';
// // take data for restaurant list
// const { restaurants } = data;

// let output = '';

// for (const restaurant of restaurants) {
//   output += `
//     <div class="restaurant__item">
//       <div class="card__header">
//         <div class="card__header__location">${restaurant.city}</div>
//         <img
//           class="card__header__image"
//           src=${restaurant.pictureId}
//           alt=""
//         />
//       </div>
//       <div class="card__body">
//         <div class="card__body__rating">
//           Rating: <span id="rating">${restaurant.rating}</span>
//         </div>
//         <div class="card__body__name">${restaurant.name}</div>
//         <div class="card__body__description">
//           ${restaurant.description}
//         </div>
//       </div>
//     </div>
//   `;
// }

// // put cards on document
// document.querySelector('.restaurant__list').innerHTML = output;
