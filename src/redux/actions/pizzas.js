import axios from 'axios';

export const setPizzas = (items) => ({
  // action creator, return simple obj{} with type of current action and payload.
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = () => {
  //
  return function (getPizzas) {
    axios.get('http://localhost:3002/pizzas').then(({ data }) => {
      getPizzas(setPizzas(data));
    });
  };
};
