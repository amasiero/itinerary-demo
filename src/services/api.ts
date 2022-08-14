import axios from 'axios';

const api = axios.create({
  baseURL: 'http://router.project-osrm.org',
});

export default api;
