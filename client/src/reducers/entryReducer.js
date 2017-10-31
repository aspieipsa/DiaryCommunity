import { FETCH_ENTRIES, POST_ENTRY } from '../actions/types';
import _ from 'lodash';

export default function(entries = [], action) {
  console.log('Reducer: action', action);
  console.log('Reducer: state', entries);
  switch (action.type) {
    case FETCH_ENTRIES:
      return action.payload.entries || entries;
    case POST_ENTRY:
      if (action.payload.entry) return [action.payload.entry, ...entries];
      else return entries;
    default:
      return entries;
  }
}
