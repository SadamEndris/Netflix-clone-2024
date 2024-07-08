import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;

// https://api.themoviedb.org/3/trending/all/week?api_key=56084ce3c6401afd82ed00d30d04ebb2&language=en-US
