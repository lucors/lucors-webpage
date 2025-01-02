import Button from "#common/Button";
import { createFrame } from "./shared";

export default function FrameButton({
  title,
  href,
  icon,
  onClick,
  children,
  inline = false,
}) {
  return (
    <Button
      onClick={() => {
        createFrame(title, href, icon);
        if (onClick) onClick();
      }}
      inline={inline}
    >
      {children}
    </Button>
  );
}
