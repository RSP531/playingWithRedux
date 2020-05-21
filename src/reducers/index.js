import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  ADD_MESSAGE
} from "../actions/types";

export default (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    }
    default:
      return state;
  }
};
