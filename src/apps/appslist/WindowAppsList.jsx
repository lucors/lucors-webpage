import { memo } from "react";
import Window from "#main/windows/Window";
import "./WindowAppsList.css";
import IconsList from "./IconsList";

function AppsList() {
  return (
    <div className="section mwem20">
      {/* <h3>Открыть веб-страницу в окне iframe</h3> */}
      <IconsList />
    </div>
  );
}

export default memo(function WindowUrl2Frame({ data }) {
  return <Window data={data} content={<AppsList />} />;
});
