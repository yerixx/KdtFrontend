import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//app을 store로 감싸려면 Provider 필요
import { Provider } from "react-redux";
// 꼭 store 값 필요
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
