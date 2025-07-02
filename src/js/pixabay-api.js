
const api_key = '51088577-7b521529318281431558696f8';

export const fetchImages = (input) => { 

    const api_url = `https://pixabay.com/api/?key=${api_key}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(api_url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

}