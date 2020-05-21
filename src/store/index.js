import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { counter: 0, text: "" };
export const store = createStore(reducer, initialState);
