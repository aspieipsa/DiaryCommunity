import axios from "axios";
import { FETCH_USER, FETCH_POSTS, AUTHENTICATE_USER } from "./types";

export const fetchUser = () => async dispatch => {
  let res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// these are not used, just trying things out
export const authenticateUser = (username, password) => async dispatch => {
  let res = await axios.post("/api/login", { username, password });
  dispatch({ type: AUTHENTICATE_USER, payload: res.data });
};

export const fetchEntries = url => async dispatch => {
  let res = await axios.get("/api/entry/list", {
    params: { customURL: url }
  });
  dispatch({ type: FETCH_POSTS, payload: res.data });
};
