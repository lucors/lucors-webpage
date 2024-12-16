import "./Button.css";

export default function Button({ onClick, children, subAction, inline }) {
  return (
    <div className={`button ${inline ? "inline" : ""}`}>
      <div onClick={onClick}>{children}</div>
      {subAction}
    </div>
  );
}
