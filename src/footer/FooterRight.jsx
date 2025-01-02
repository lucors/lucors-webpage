import Clock from "#common/Clock";
import Separator from "./Separator";

export default function FooterRight() {
  return (
    <div className="rightFootBox">
      <Separator />
      <Clock />
    </div>
  );
}
