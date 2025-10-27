import {memo} from "react";
import Window from "#windows/Window";
import "./WindowWelcome.css";
import {META} from "./shared";
import {META as contactsMeta} from "#apps/contacts/shared.jsx";
import {useTranslation} from "react-i18next";
import {TITLE_KEY} from "#common/consts.js";
import Button from "#common/Button.jsx";

function Welcome() {
  const {t} = useTranslation(META.type);

  return (
    <div className="section mwem30">
      {t("w1")}<br/>
      {t("w2")}<br/>
      {t("w3")}{" "}
      <Button
        title={t("contactsTitle")}
        onClick={contactsMeta.createApp}
        inline={true}
      >
        {t("contacts")}
      </Button>
      {t("w5")} <br/>
      {t("w6")} <br/>
      {t("w7")} <br/>
      {t("w8")}
    </div>
  );
}

export default memo(function WindowContacts({data}) {
  const {t} = useTranslation(META.type);
  return <Window data={data} title={t(TITLE_KEY)} icon={META.icon} content={<Welcome/>}/>;
});
