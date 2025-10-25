import {memo} from "react";
import Window from "#windows/Window";
import "./WindowAbout.css";
import {META} from "./shared";
import {useTranslation} from "react-i18next";
import {TITLE_KEY} from "#common/consts.js";
import {META as contactsMeta} from "#apps/contacts/shared.jsx";
import Button from "#common/Button.jsx";

function LibIcon({ src, href, title }) {
  return (
    <a href={href} target="_blank">
      <img src={src} alt={title} />
    </a>
  );
}

function About() {
  const { t } = useTranslation(META.type);

  return (
    <div className="section about mwem25">
      {t("a1")}
      <br />
      {t("a2")}{" "}
      <Button
        title={t("contactsTitle")}
        onClick={contactsMeta.createApp}
        inline={true}
      >
        {t("contacts")}
      </Button>
      .
      <br />
      <a href="https://github.com/lucors/lucors-webpage">{t("a3")}</a>
      <br />
      <br />
      {t("a4")} <code className="language-none">{t("a4C")}</code>.
      <br />
      <br />
      {t("a5")} <code className="language-none">iframe</code>.
      <br />
      {t("a6")}{" "}
      <code className="language-none">LocalStorage</code>.
      <br />
      <br />
      {t("a7")}
      <br />
      <div className="libs">
        <LibIcon
          title="React"
          src="img/logo-react.png"
          href="https://react.dev/"
        />
        <LibIcon
          title="Redux"
          src="img/logo-redux.png"
          href="https://redux.js.org/"
        />
        <LibIcon
          title="Vite"
          src="img/logo-vite.png"
          href="https://vite.dev/"
        />
        <LibIcon
          title="jQuery"
          src="img/logo-jquery.png"
          href="https://jquery.com/"
        />
        <LibIcon
          title="Prism"
          src="img/logo-prism.png"
          href="https://prismjs.com/?ref=wdiaz"
        />
      </div>
    </div>
  );
}

export default memo(function WindowContacts({data}) {
  const {t} = useTranslation(META.type);
  return <Window data={data} title={t(TITLE_KEY)} icon={META.icon} content={<About/>}/>;
});
