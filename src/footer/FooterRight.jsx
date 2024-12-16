import { useSelector } from "react-redux";
import Clock from "./Clock";
import Separator from "./Separator";

export default function FooterRight() {
  const mobile = useSelector(state => state.screen.mobile);
  if (mobile) return;
  return (
    <div className="rightFootBox">
      <Separator />
      <Clock />
    </div>
  );
}
