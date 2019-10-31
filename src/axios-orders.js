import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burgerbuilder-ea4bb.firebaseio.com/',
});

export default instance;
