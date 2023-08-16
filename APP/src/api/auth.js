import axios from 'axios';

const URL = 'http://localhost:5000/api';

export const registerRequest = user => axios.post(`${URL}/register`, user);