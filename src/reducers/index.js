import { INCREMENT_COUNTER } from "../actions/types";

export default (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
