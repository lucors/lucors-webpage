import { memo } from "react";
import Window from "#main/windows/Window";
import Trashzone from "./Trashzone";

export default memo(function WindowTrash({ data }) {
  return <Window data={data} content={<Trashzone />} />;
});
