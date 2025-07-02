// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';
// Dokümantasyonda belirtilen import
import { renderImages } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';


const form = document.getElementById('form');
const loader = document.querySelector('.loader');


form.addEventListener('submit', e => {
  e.preventDefault();

  const input = e.target.elements.search.value;


  if (input === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    })
    return;
  };
  loader.style.display = 'block';

  fetchImages(input)
    .then(data => {
      renderImages(data);
      loader.style.display = 'none';
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'There was an error fetching the images. Please try again later.',
        position: 'topRight',
      });
      console.error('Error fetching images:', error);
    });
  
  form.reset();
});
