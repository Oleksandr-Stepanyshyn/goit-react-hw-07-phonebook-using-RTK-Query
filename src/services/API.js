import axios from 'axios';

axios.defaults.baseURL = 'https://6284b04d3060bbd3473d5d5b.mockapi.io';

export const fetch = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const post = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const del = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
