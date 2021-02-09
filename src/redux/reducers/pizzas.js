const initialState = {
  items: [],
  isLoaded: false,
};

var payload = false;

const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    if (action.payload) {
      payload = true;
    }

    return {
      ...state,
      items: action.payload,
      isLoaded: payload,
    };
  }
  return state;
};

export default pizzas;
