// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';
// Dokümantasyonda belirtilen import
import { renderImages,showLoader,hideLoader,clearGallery } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';


const form = document.querySelector('.form');
const loader = document.querySelector('.loader');


form.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();

  const input = e.target.elements.search.value;


  if (input === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    })
    return;
  };
  showLoader();

  fetchImages(input)
    .then(data => {
      
      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'No results',
          message: 'No images found for your search query.',
          position: 'topRight',
        });
        return;
      }
      renderImages(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'There was an error fetching the images. Please try again later.',
        position: 'topRight',
      });
      console.error('Error fetching images:', error);
    }).finally(() => {
      hideLoader();
    })
  
  form.reset();
});
