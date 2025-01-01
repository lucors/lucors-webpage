import Button from "./Button";
import { createFrame } from "#apps/frame/WindowFrame.jsx";

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
