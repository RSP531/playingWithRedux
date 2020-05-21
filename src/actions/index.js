import { INCREMENT_COUNTER, DECREMENT_COUNTER, ADD_MESSAGE } from "./types";

export const increment = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrement = () => {
  return {
    type: DECREMENT_COUNTER
  };
};

export const submitMessage = message => {
  return {
    type: ADD_MESSAGE,
    payload: message
  };
};
