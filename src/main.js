// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

const api_key = '51088577-7b521529318281431558696f8';

const form = document.getElementById('form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();
  gallery.innerHTML = '';

  const input = e.target.elements.search.value;

  const api_url = `https://pixabay.com/api/?key=${api_key}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(api_url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0 || input === '') {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      } else {
        console.log(data.hits);
        const images = data.hits
          .map(
            hit => `<li class="gallery-item">
                <img src="${hit.webformatURL}" width='360' height='200' alt="${hit.tags}">
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
      }
    })
    .catch(error => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    });

  form.reset();
});
