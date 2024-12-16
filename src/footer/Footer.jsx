import { useDispatch } from "react-redux";
import { toogleMenu } from "../store/menuSlice";
import Menu from "./Menu";
import Separator from "./Separator";
import "./Footer.css";
import FooterRight from "./FooterRight";
import TaskBar from "./TaskBar";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer>
      <div className="leftFootBox">
        <div id="startButt" onClick={() => dispatch(toogleMenu())}>
          <img className="menuImg" src="img/app-menu.svg" />
          <span className="menuText">Меню</span>
        </div>
        <Separator />
        <TaskBar/>
        <Menu />
      </div>
      <FooterRight />
    </footer>
  );
}
