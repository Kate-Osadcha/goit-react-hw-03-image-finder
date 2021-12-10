const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24022420-d4b3a2f8f052f21486674bd5c';

function fetchQuery(searchQuery, page) {
  return fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.json());
}

export default fetchQuery;
