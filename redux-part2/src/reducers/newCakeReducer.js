import { BUY_NEWCAKE } from "../actions/types";

const initialState = {
  numOfNewCakes: 20,
};

const newCakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_NEWCAKE:
      return {
        ...state,
        numOfNewCakes: state.numOfNewCakes - action.payload,
      };
    default:
      return state;
  }
};

export default newCakeReducer;
