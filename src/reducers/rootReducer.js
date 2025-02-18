import { combineReducers } from 'redux'

import {filterReducer} from './filterReducer'
import {sortReducer} from './sortReducer'

export const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filterReducer
    
})
