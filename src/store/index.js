import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { counter: 0, messages: [] };
export const store = createStore(reducer, initialState);
