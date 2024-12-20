import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import "./oldstyle.css";
import App from "./App.jsx";
import store from "./store/store.js";
import backgroundEvents, { prepareWindow } from "./backgroundEvents.js";
import { createExplorer } from "./main/windows/WindowExplorer.jsx";

prepareWindow();
createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
backgroundEvents();
createExplorer();
