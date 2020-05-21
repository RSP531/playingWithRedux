import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions/types";

export default (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        counter: state.counter + 1
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
