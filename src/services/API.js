import axios from 'axios';

axios.defaults.baseURL = 'https://6284b04d3060bbd3473d5d5b.mockapi.io';

export const fetch = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const post = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const del = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
