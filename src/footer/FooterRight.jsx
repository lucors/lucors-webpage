import Button from "#common/Button.jsx";
import Clock from "#common/Clock";
import { useTranslation } from "react-i18next";
import Separator from "./Separator";

function ChangeLanguage() {
  const { i18n } = useTranslation();

  function toggleLang() {
    i18n.changeLanguage(i18n.language == "ru" ? "en" : "ru");
  }

  return <Button onClick={toggleLang}>{i18n.language}</Button>;
}

export default function FooterRight() {
  return (
    <div className="rightFootBox">
      <Separator />
      <ChangeLanguage />
      <Clock />
    </div>
  );
}
