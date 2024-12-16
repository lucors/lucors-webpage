import "./ActionNewWindow.css";

export default function ActionNewWindow({onClick}) {
  return (
    <img
      className="new-window"
      src="img/new-window.svg"
      title="В новом окне"
      onClick={onClick}
    />
  );
}
