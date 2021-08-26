import apisauce from 'apisauce';

export const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const create = (baseURL = BASE_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    timeout: 60000,
  });
  const getBaseURL = () => api.getBaseURL();
  const setHeaders = (data = {}) => api.setHeaders(data);
  const deleteHeader = (data = {}) => api.deleteHeader(data);
  //auth
  const fetchUsers = params => api.get('todos', params);

  return {
    //header
    setHeaders,
    deleteHeader,
    getBaseURL,
    //auth
    fetchUsers,
  };
};

export default {
  create,
};
