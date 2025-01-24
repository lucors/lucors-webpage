import { useDispatch } from "react-redux";
import { toogleMenu } from "#store/menuSlice";
import Menu from "./Menu/Menu";
import Separator from "./Separator";
import "./Footer.css";
import FooterRight from "./FooterRight";
import TaskBar from "./TaskBar";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const dispatch = useDispatch();
  const windowsList = useSelector((state) => state.windows.list) ?? [];
  const mobile = useSelector((state) => state.screen.mobile);
  const { t } = useTranslation();

  return (
    <footer>
      {/* <div className="leftFootBox"> */}
      <div id="startButt" onClick={() => dispatch(toogleMenu())}>
        <img className="menuImg" src="img/menu.svg" />
        <span className="menuText">{t("menu")}</span>
      </div>
      <Separator />
      <TaskBar />
      <Menu />
      {/* </div> */}
      <FooterRight isMobile={mobile} winCount={windowsList.length}/>
    </footer>
  );
}
