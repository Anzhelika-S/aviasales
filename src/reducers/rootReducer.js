import { combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { sortReducer } from './sortReducer';
import { ticketsReducer } from './ticketsReducer';
import { errorReducer } from './errorReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filterReducer,
  tickets: ticketsReducer,
  error: errorReducer,
  loading: loadingReducer,
});
