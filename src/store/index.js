import { reducer } from "./reducers";

const initialState = {
  cart: [],
  products: [{}, {}],
  user: null,
  // foco... é com base nesse atributo (number)
  number: 0,
};

export { initialState, reducer };
