const initialState = {
  filters: [],
}

export const TOGGLE_FILTER = 'TOGGLE_FILTER'

export const TOGGLE_ALL_FILTERS = 'TOGGLE_ALL_FILTERS'

export const toggleFilter = (filter) => ({
  type: TOGGLE_FILTER,
  payload: filter
})

export const toggleAllFilters = (filter) => ({
  type: TOGGLE_ALL_FILTERS,
  payload: filter
})

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_FILTER: 
    return {
      ...state,
      filters: state.filters.includes(action.payload) ? state.filters.filter((opt) => opt !== action.payload) : [...state.filters, action.payload]
    }

  case TOGGLE_ALL_FILTERS: 
    return {
      ...state,
      filters: state.filters.length === action.payload.length ? [] : action.payload
    }
  default:
    return state
  }
}
