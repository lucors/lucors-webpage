import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "#store/menuSlice";
import Menu from "./Menu/Menu";
import Separator from "./Separator";
import "./Footer.css";
import FooterRight from "./FooterRight";
import TaskBar from "./TaskBar";

export default function Footer() {
  const dispatch = useDispatch();
  const mobile = useSelector(state => state.screen.mobile);

  return (
    <footer>
      <div className="leftFootBox">
        <div id="startButt" onClick={() => dispatch(toogleMenu())}>
          <img className="menuImg" src="img/menu.svg" />
          <span className="menuText">Меню</span>
        </div>
        <Separator />
        <TaskBar/>
        <Menu />
      </div>
      {!mobile && <FooterRight />}
    </footer>
  );
}
