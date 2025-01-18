import store from "#store/store.js";
import {
  addWindow,
  byType,
  setCurrentWindowById,
  updateWindow,
} from "#store/windowsSlice.js";
import { appsComponents } from "./apps";

export function withDoubleClick(ref, onDoubleClick, onClick = null) {
  return (event) => {
    if (store.getState()?.screen?.mobile) return onDoubleClick();
    clearTimeout(ref.current);
    if (event.detail === 1) {
      if (onClick) {
        ref.current = setTimeout(() => {
          onClick();
        }, 200);
      }
    } else if (event.detail === 2) {
      onDoubleClick();
    }
  };
}

export function saveLocation(params) {
  if (!params) {
    window.history.pushState(null, null, "?");
    window.location.hash = "#";
    return;
  }
  const url = new URL(window.location.href);
  for (const key in params) {
    url.searchParams.set(key, String(params[key]).replaceAll(" ", "~"));
  }
  window.history.pushState(null, "", url);
}

export function parseQuery(queryString) {
  if (queryString.length < 2) return undefined;
  const query = {};
  const pairs = (
    queryString[0] === "?" ? queryString.substr(1) : queryString
  ).split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(
      pair[1] || ""
    ).replaceAll("~", " ");
  }
  return query;
}

export function addWindowFromUri(params) {
  const win = byType(store.getState(), params.tp);
  if (!win) {
    return store.dispatch(
      addWindow({
        title: params.tt,
        icon: params.i,
        type: params.tp,
        query: params.m,
        href: params.m,
      })
    );
  }
  store.dispatch(setCurrentWindowById(win.id));
  return store.dispatch(
    updateWindow({
      id: win.id,
      icon: params.i,
      title: params.tt,
      collapsed: false,
      query: params.m,
      href: params.m,
    })
  );
}

export function isInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

export function getSingletonAppCreator(type, title, icon, stateOptions = {}) {
  return function () {
    const win = byType(store.getState(), type);
    if (!win) {
      return store.dispatch(
        addWindow({
          title,
          icon,
          type,
          ...stateOptions
        })
      );
    }
    store.dispatch(setCurrentWindowById(win.id));
    return store.dispatch(
      updateWindow({
        id: win.id,
        collapsed: false,
      })
    );
  };
}
