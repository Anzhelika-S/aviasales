import { combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { sortReducer } from './sortReducer';
import { ticketsReducer } from './ticketsReducer';

export const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filterReducer,
  tickets: ticketsReducer
});
