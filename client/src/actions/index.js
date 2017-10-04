import axios from "axios";
import { FETCH_USER, FETCH_POSTS } from "./types";

export const fetchUser = () => async dispatch => {
  let res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchEntries = url => async dispatch => {
  let res = await axios.get("/api/entry", {
    customURL: url
  });
  dispatch({ type: FETCH_POSTS, payload: res.data });
};
