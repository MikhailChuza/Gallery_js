import requestForImgs from './js/pixabay-api.js';
import iziToast from 'izitoast';

const form = document.querySelector('.form');
const moreBtn = document.querySelector('.more-btn');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', doSearch);

function doSearch(event) {
  event.preventDefault();
  const searchValue = event.target.elements.search.value.trim();

  if (searchValue === '') {
    iziToast.show({
      message: 'You have to enter something',
      backgroundColor: 'red',
      messageColor: 'white',
      position: 'topCenter',
    });
  } else {
    gallery.innerHTML = '';
    requestForImgs(event);
  }
  form.reset();
}

moreBtn.addEventListener('click', showMoreImgs);

function showMoreImgs(event) {
  requestForImgs(event);
}