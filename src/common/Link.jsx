import "./Button.css";

export default function Link({ href, target, children, subAction, inline }) {
  return (
    <div className={`link button ${inline ? "inline" : ""}`}>
      <a href={href} target={target}>{children}</a>
      {subAction}
    </div>
  );
}
