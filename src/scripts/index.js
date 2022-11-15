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
