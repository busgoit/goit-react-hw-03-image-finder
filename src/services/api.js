import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

// const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '29567452-13c0ef8ee2b32c583ed3e8ed6';
const SEARCH_FILTER = 'image_type=photo&orientation=horizontal&safesearch=true';

export const fetchImagesWithQuery = async (searchQuery, page) => {
  //   const response = await axios.get(
  //     `${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&${SEARCH_FILTER}&per_page=1&page=20`
  //   );

  const response = await axios.get(
    `/?key=${API_KEY}&q=${searchQuery}&${SEARCH_FILTER}&per_page=5&page=${page}`
  );

  return response.data.hits;
};

const API = {
  fetchImagesWithQuery,
};

export default API;
