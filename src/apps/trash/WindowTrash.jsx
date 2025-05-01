import { memo } from "react";
import Window from "#windows/Window";
import Trashzone from "./Trashzone";
import { WINDOW_TITLE } from "./shared";

export default memo(function WindowTrash({ data }) {
  return <Window data={data} title={WINDOW_TITLE} content={<Trashzone />} />;
});
