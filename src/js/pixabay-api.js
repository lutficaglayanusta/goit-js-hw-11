import axios from 'axios';
const api_key = '51088577-7b521529318281431558696f8';

export const fetchImages = (input) => { 

    const api_url = `https://pixabay.com/api/?key=${api_key}&q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;

    axios.get(api_url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        if (response.data.hits.length > 0) {
            return response.data.hits;
        } else {
            throw new Error('No images found');
        }
    }).catch(error => { 
        console.error('Error fetching images:', error);
        throw error;
    });
}