import Button from "#common/Button.jsx";
import Clock from "#common/Clock";
import { useTranslation } from "react-i18next";
import Separator from "./Separator";
import TaskKillAll from "./TaskKillAll";

export function ChangeLanguage() {
  const { i18n } = useTranslation();

  function toggleLang() {
    i18n.changeLanguage(i18n.language.includes("ru") ? "en" : "ru");
  }

  return (
    <Button className="change-lang" onClick={toggleLang}>
      {i18n.language.includes("ru") ? "ru" : "en"}
    </Button>
  );
}

export default function FooterRight({ isMobile, winCount }) {
  return (
    <div className="rightFootBox">
      {winCount > 0 && <TaskKillAll />}
      <Separator />
      <ChangeLanguage />
      {!isMobile && <Clock />}
    </div>
  );
}
