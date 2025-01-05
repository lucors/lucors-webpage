import { useDispatch } from "react-redux";
import { toogleMenu } from "#store/menuSlice";
import Menu from "./Menu/Menu";
import Separator from "./Separator";
import "./Footer.css";
import FooterRight from "./FooterRight";
import TaskBar from "./TaskBar";
import TaskKillAll from "./TaskKillAll";
import { useSelector } from "react-redux";

export default function Footer() {
  const dispatch = useDispatch();
  const windowsList = useSelector((state) => state.windows.list) ?? [];
  const mobile = useSelector((state) => state.screen.mobile);

  return (
    <footer>
      <div className="leftFootBox">
        <div id="startButt" onClick={() => dispatch(toogleMenu())}>
          <img className="menuImg" src="img/menu.svg" />
          <span className="menuText">Меню</span>
        </div>
        <Separator />
        <TaskBar />
        <Menu />
        {mobile && windowsList.length > 0 && (
          <>
            <Separator /> <TaskKillAll />
          </>
        )}
      </div>
      {!mobile && <FooterRight />}
    </footer>
  );
}
