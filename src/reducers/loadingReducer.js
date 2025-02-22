const initialState = {
  loading: true,
};

export const LOADING_ON = 'LOADING_ON';
export const LOADING_OFF = 'LOADING_OFF';

export const onLoading = () => {
  return {
    type: LOADING_ON,
  };
};

export const onLoadingOff = () => {
  return {
    type: LOADING_OFF,
  };
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADING_OFF:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
