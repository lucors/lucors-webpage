import "./Button.css";

export default function Button({ className = "", onClick, children, subAction, inline, primary }) {
  return (
    <div className={`button ${inline ? "inline" : ""} ${primary ? "primary" : ""} ` + className}>
      <div onClick={onClick}>{children}</div>
      {subAction}
    </div>
  );
}
