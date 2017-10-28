import axios from 'axios';
import { FETCH_USER, FETCH_ENTRIES, AUTHENTICATE_USER, POST_ENTRY } from './types';

export const fetchUser = () => async dispatch => {
  let res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data.current });
};

export const fetchEntries = uri => async dispatch => {
  console.log('dispatch', dispatch);
  let res = await axios.get(`/api/entries/aaa`);
  console.log('RES.DATA', res.data);
  dispatch({ type: FETCH_ENTRIES, payload: res.data });
};

export const postEntry = (uri, entry) => async dispatch => {
  let res = await axios.post(`/api/entries/aaa`, entry);
  console.log('RES.DATA', res);
  dispatch({ type: POST_ENTRY, payload: res.data });
};
