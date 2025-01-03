import store from "#store/store.js";
import { addWindow, byType, setCurrentWindowById, updateWindow } from "#store/windowsSlice.js";

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

export function saveLocation(currentLocation) {
  if (!currentLocation) {
    window.history.pushState(null, null, "?");
    window.location.hash = "#";
    return;
  }
  currentLocation = "?" + currentLocation;
  try {
    window.history.pushState(null, null, currentLocation);
    return;
  } catch (e) {}
  window.location.hash = "#" + currentLocation;
}

export function parseQuery(queryString) {
  if (queryString.length < 2) return undefined;
  const query = {};
  const pairs = (
    queryString[0] === "?" ? queryString.substr(1) : queryString
  ).split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
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
