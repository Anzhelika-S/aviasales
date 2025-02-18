import { configureStore } from '@reduxjs/toolkit'

import {rootReducer} from './reducers/rootReducer'

const store = configureStore({
  reducer: rootReducer
})

console.log(store.getState())


export default store
