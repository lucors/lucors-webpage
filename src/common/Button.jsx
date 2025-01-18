import "./Button.css";

export default function Button({ className = "", onClick, children, subAction, inline }) {
  return (
    <div className={`button ${inline ? "inline" : ""} ` + className}>
      <div onClick={onClick}>{children}</div>
      {subAction}
    </div>
  );
}
