import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "#providers/i18n.js";
import "./index.css";
import "./prism.css";
import App from "./App.jsx";
import store from "./store/store.js";
import backgroundEvents, { prepareWindow } from "./backgroundEvents.js";
import { createExplorer } from "#apps/manager/shared.jsx";
import { addWindowFromUri, parseQuery } from "#common/utils.js";
import { t } from "i18next";

const params = parseQuery(window.location.search);
const firstTime = !!!localStorage.getItem("persistantState");
if (firstTime) {
  console.log(t("welcome"));
} else {
  document.body.style.setProperty("--radius1", store.getState().settings.radius + "em");
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
