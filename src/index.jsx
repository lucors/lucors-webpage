import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import "./oldstyle.css";
import "./prism.css";
import App from "./App.jsx";
import store from "./store/store.js";
import backgroundEvents, { prepareWindow } from "./backgroundEvents.js";
import { createExplorer } from "#apps/manager/WindowExplorer.jsx";

prepareWindow();
createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
backgroundEvents();
if (!localStorage.getItem("persistantState")) createExplorer();
