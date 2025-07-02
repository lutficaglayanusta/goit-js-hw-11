import SimpleLightbox from 'simplelightbox';
// Stil importu
import 'simplelightbox/dist/simple-lightbox.min.css';
// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';
// Dokümantasyonda belirtilen import

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let galleryImages = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const renderImages = data => {
  gallery.innerHTML = '';
  loader.style.display = 'none';

  if (data.hits.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  } else {
    const images = data.hits
      .map(
        hit => `<li class="gallery-item">
                <a href="${hit.largeImageURL}">
                  <img src="${hit.webformatURL}" width='360' height='200' alt="${hit.tags}">
                </a>
                
                <ul>
                    <li><b>Likes</b> ${hit.likes}</li>
                    <li><b>Views</b> ${hit.views}</li>
                    <li><b>Comments</b> ${hit.comments}</li>
                    <li><b>Downloads</b> ${hit.downloads}</li>
                </ul>
            </li>`
      )
      .join('');
    gallery.insertAdjacentHTML('beforeend', images);
    galleryImages.refresh();
  }
};
