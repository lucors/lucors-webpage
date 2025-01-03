import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import "./oldstyle.css";
import "./prism.css";
import App from "./App.jsx";
import store from "./store/store.js";
import backgroundEvents, { prepareWindow } from "./backgroundEvents.js";
import { createExplorer } from "#apps/manager/shared.jsx";
import { addWindowFromUri, parseQuery } from "#common/utils.js";

const params = parseQuery(window.location.search);
const firstTime = !!!localStorage.getItem("persistantState");
if (firstTime) {
  console.log(
    "Ох, тебя я еще не видел! Привет и добро пожаловать на мой сайт~"
  );
}

prepareWindow();
createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
backgroundEvents();

if (!params && firstTime) {
  createExplorer();
} else if (params) {
  addWindowFromUri(params);
}
