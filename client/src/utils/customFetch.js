import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://myproject-0ly5.onrender.com/api/v1',
});

export default customFetch;
