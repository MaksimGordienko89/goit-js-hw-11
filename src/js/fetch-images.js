import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '29476231-74111085bca249ef803458946';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
