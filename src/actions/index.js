import { INCREMENT_COUNTER } from "./types";

export const increment = () => {
  return {
    type: INCREMENT_COUNTER
  };
};
