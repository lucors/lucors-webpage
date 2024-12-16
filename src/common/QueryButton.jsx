import Button from "./Button";
import ActionNewWindow from "./ActionNewWindow";

export default function QueryButton({ onClick, children, query }) {
  return (
    <Button onClick={onClick} subAction={<ActionNewWindow />} inline={false}>
      {children}
    </Button>
  );
}
