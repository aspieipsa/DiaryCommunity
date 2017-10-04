import { FETCH_POSTS } from "../actions/types";
import _ from "lodash";

export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload, "id");
    default:
      return state;
  }
}
