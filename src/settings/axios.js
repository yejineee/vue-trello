import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/yejineee/vue-trello'
});

instance.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
