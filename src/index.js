import './styles.css';
import itemsTamplate from '../templates/gallery-items.hbs';
import menuItem from '../src/menu.json';

const galleryRef = document.querySelector('.js-menu');
const switchToggle = document.querySelector('#theme-switch-toggle');
const bodyColor = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeInLocal = localStorage.getItem('theme');
const markup = itemsTamplate(menuItem);

rememberBodyColor();
addTemplate();

function addTemplate() {}
galleryRef.insertAdjacentHTML('beforeend', markup);
switchToggle.addEventListener('change', addClassList);
switchToggle.addEventListener('change', changeLokalStorage);

function addClassList() {
  const check = switchToggle.checked;
  if (check) {
    bodyColor.classList.add(Theme.DARK);
    bodyColor.classList.remove(Theme.LIGHT);
  } else {
    bodyColor.classList.add(Theme.LIGHT);
    bodyColor.classList.remove(Theme.DARK);
  }
}

function changeLokalStorage() {
  if (switchToggle.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function rememberBodyColor() {
  if (themeInLocal === Theme.DARK) {
    bodyColor.classList.add(Theme.DARK);
    switchToggle.checked = true;
  }
}
