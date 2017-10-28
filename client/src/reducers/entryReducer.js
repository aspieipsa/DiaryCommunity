import { FETCH_ENTRIES, POST_ENTRY } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  console.log('action', action);
  switch (action.type) {
    case FETCH_ENTRIES:
      return action.payload.entries || []; //action.payload.entries;
    case POST_ENTRY:
      return state.entries;
    default:
      return state;
  }
}
