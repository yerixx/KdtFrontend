// 꼭 createStore 찾아와야함
import { createStore } from "redux";
import reducer from "./reducer";

let store = createStore(reducer);

export default store;
