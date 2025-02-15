import QueryButton from "./QueryButton";
import "./About.css";
import { useTranslation } from "react-i18next";
import { WINDOW_APP_MANAGER } from "./shared";
import i18next from "i18next";

i18next.addResourceBundle("en", WINDOW_APP_MANAGER, {
  a1: "This website is my PET project.",
  a2: "More about me in the section",
  a3: "Project Repository",
  a4: "By continuing to use this site you agree with",
  a4C: "cookie policy",
  a5: "To display content from other pages on this domain or external domain names, this site uses",
  a6: "State of windows is saved on your device in the storage: ",
  a7: "This website uses third-party libraries:",
});
i18next.addResourceBundle("ru", WINDOW_APP_MANAGER, {
  a1: "Данная страница является моим PET-проектом.",
  a2: "Подробнее обо мне в разделе",
  a3: "Репозиторий проекта",
  a4: "Продолжая пользоваться сайтом вы соглашаетесь с условиями использования файлов",
  a4C: "cookie",
  a5: "Для отображения контента с других страниц данного домена или внешних доменных имен используется",
  a6: "Состояние окон сохраняется на вашем устройстве в хранилище",
  a7: "На странице используются сторонние библиотеки:",
});

function LibIcon({ src, href, title }) {
  return (
    <a href={href} target="_blank">
      <img src={src} alt={title} />
    </a>
  );
}

export default function About() {
  const { t } = useTranslation(WINDOW_APP_MANAGER);

  return (
    <div className="section about mwem25">
      {t("a1")}
      <br />
      {t("a2")}{" "}
      <QueryButton
        title={t("contactsTitle")}
        query="contacts"
        subActionAllow={false}
        inline={true}
      >
        {t("contacts")}
      </QueryButton>
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
