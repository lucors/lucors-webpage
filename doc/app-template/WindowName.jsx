import { memo } from "react";
import Window from "#layout/main/windows/Window";

function Content() {
  return <div>Контент окна</div>;
}

export default memo(function WindowName({ data }) {
  return <Window data={data} content={<Content />} />;
});
