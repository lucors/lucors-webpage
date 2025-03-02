import Button from "#common/Button";
import ActionNewWindow from "#common/ActionNewWindow";
import { createExplorer, setWindowQuery } from "./shared";

export default function QueryButton({
  title,
  winid,
  query,
  className = "",
  onClick,
  children,
  primary,
  subActionAllow = true,
  inline = false,
}) {
  return (
    <Button
      className={className}
      primary={primary}
      onClick={() => {
        setWindowQuery(title, query, winid);
        if (onClick) onClick();
      }}
      subAction={
        subActionAllow && (
          <ActionNewWindow onClick={() => createExplorer(title, query, true)} />
        )
      }
      inline={inline}
    >
      {children}
    </Button>
  );
}
