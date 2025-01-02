import store from "#store/store.js";

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
