import "./Button.css";

export default function Button({ className = "", onClick, children, subAction, inline, primary }) {
  return (
    <div className={`button ${inline ? "inline" : ""} ${primary ? "primary" : ""} ` + className}>
      <button onClick={onClick}>{children}</button>
      {subAction}
    </div>
  );
}
