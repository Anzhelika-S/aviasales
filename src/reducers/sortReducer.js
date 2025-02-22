const initialState = {
  sort: 'cheapest',
};

export const SET_SORT = 'SET_SORT';

export const setSort = (sort) => ({
  type: SET_SORT,
  payload: sort,
});

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};
