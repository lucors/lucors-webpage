import { memo, useRef, useState } from "react";
import Window from "#windows/Window";
import "./WindowContacts.css";
import { WINDOW_APP_CONTACTS } from "./shared";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Button from "#common/Button.jsx";

i18next.addResourceBundle("en", WINDOW_APP_CONTACTS, {
  c1: "Hello!",
  c2: "My name is...",
  c3: "Maxim",
  c4: "Also known as",
  c5: "I am the devloper of this website",
  cphoto: "My photo",
  c6: "Born in Russia, in",
  c7: "Saratov",
  c8: "I completed my bachelor's degree at the",
  c9: "Saratov State University",
  c10: "in the Mechanics and Mathematics Department, where I also became interested in web technologies.",
  c11: "At the moment I work in the IT sphere as a test automation engineer.",
  c12: "The pseudonym I chose",
  csound: "Sound",
  c13: "a loose blend of the Latin words \"lux\" (light) and \"cor\" (heart). However, there was no intended meaning initially, just my imagination.",
  c14: "Below are links where you can contact me, as well as my accounts on the Git hosts where I store my repositories.",
  c15: "Thank you for visiting my site",
  r1: "Your review has been sent.",
  r2: "Do you have any complaints or ideas?",
  r3: "You can also use this anonymous form to contact me.",
  r4: "Name",
  r5: "Review",
  r6: "Send",
  h1: "About me",
  h2: "Links",
  h3: "Feedback",
  h4: "What is 'lucors'?",
});
i18next.addResourceBundle("ru", WINDOW_APP_CONTACTS, {
  c1: "Привет!",
  c2: "Меня зовут...",
  c3: "Максим",
  c4: "Также известен как",
  c5: "Я создатель этого сайта",
  cphoto: "Моё фото",
  c6: "Родился в России, в",
  c7: "Саратове",
  c8: "Отучился на бакалавра в",
  c9: "СГУ имени Н. Г. Чернышевского",
  c10: "на Механико-математическом факультете, там же и пристрастился к веб-технологиям.",
  c11: "На данный момент работаю в IT сфере на должности автоматизатора тестирования.",
  c12: "Выбранный мною псевдоним",
  csound: "Звук",
  c13: "это вольная смесь латинских слов \"lux\" (свет) и \"cor\" (сердце). Однако изначально никакого смысла заложено и не было, лишь моя фантазия.",
  c14: "Ниже представлены ссылки по которым вы можете со мной связаться, а также мои аккаунты в Git хостах, где я храню свои репозитории.",
  c15: "Спасибо, что посетили мой сайт",
  r1: "Ваш отзыв отправлен",
  r2: "У вас есть жалобы или идеи?",
  r3: "Вы можете также использовать данную анонимную форму, для связи со мной.",
  r4: "Имя",
  r5: "Отзыв",
  r6: "Отправить",
  h1: "О себе",
  h2: "Ссылки",
  h3: "Обратная связь",
  h4: "Что за 'lucors'?",
});

function Contacts() {
  const [sended, setSended] = useState(false);
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const { t } = useTranslation(WINDOW_APP_CONTACTS);

  const sendForm = () => {
    if (!textRef?.current?.value || !nameRef?.current?.value) return;
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("review", textRef.current.value);
    setSended(true);
    axios
      .post("https://lucors.ru/send_rev.php", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const playLucors = () => {
    const audio = new Audio("audio/lucors.mp3");
    audio.play();
  };

  return (
    <div className="contactsContent">
      <div className="section avatar-container">
        <div className="text">
          <div className="makishimudesu">
            {t("c1")}
            <br /> {t("c2")}
            <div className="name">{t("c3")}</div>
          </div>
          <div>
            {t("c4")} <code className="language-none">lucors</code>
          </div>
          <div className="watashinopage">{t("c5")}</div>
        </div>
        <img
          className="avatar"
          src="img/logo-avatar-small-alpha.png"
          alt={t("cphoto")}
        />
      </div>

      <div className="section">
        <h2>{t("h1")}</h2>
        {t("c6")}{" "}
        <a href="https://ru.wikipedia.org/wiki/Саратов" target="_blank">
          {t("c7")}
        </a>
        . <br />
        {t("c8")}{" "}
        <a href="https://www.sgu.ru/" target="_blank">
          {t("c9")}
        </a>{" "}
        {t("c10")} <br />
        {t("c11")} <br />
      </div>

      <div className="section">
        <h2>{t("h4")}</h2>
        {t("c12")}{" "}
        <code className="language-none textLucors">
          <img
            src="img/lucors-text.png"
            alt="lucors (ˈlukərz)"
            onClick={playLucors}
          />
        </code>
        <img
          className="playLucors"
          src="img/play-sound.png"
          alt={t("csound")}
          onClick={playLucors}
        />{" "}
        {t("c13")}
      </div>

      <div className="section links">
        <div className="desc">
          <h2>{t("h2")}</h2>
          {t("c14")} <br />
          {t("c15")} <span className="heart">❤</span> <br />
        </div>
        <div className="aboutmeHrefs">
          <a
            target="_blank"
            className="about aboutmeTg"
            href="https://t.me/lucors"
            title="Telegram"
          >
            <img src="img/contact-tg.png" />
          </a>
          <a
            target="_blank"
            className="about aboutmeVk"
            href="https://vk.com/lucors"
            title="VK"
          >
            <img src="img/contact-vk.png" />
          </a>
          <a
            target="_blank"
            className="about aboutmeYamail"
            href="mailto:thesourcecode.max@yandex.ru"
            title="Yandex Mail"
          >
            <img src="img/contact-ya.png" />
          </a>
          <a
            className="about aboutmeGmail"
            href="mailto:lucors.dev@gmail.com"
            title="Gmail"
          >
            <img src="img/contact-gm.png" />
          </a>
          <a
            target="_blank"
            className="about aboutmeGitHub"
            href="https://github.com/lucors"
            title="GitHub"
          >
            <img src="img/contact-gh.png" />
          </a>
          <a
            target="_blank"
            className="about aboutmeGitLab"
            href="https://gitlab.com/lucors-dev"
            title="GitLab"
          >
            <img src="img/contact-gl.png" />
          </a>
        </div>
      </div>

      <div className="section">
        <div className="desc">
          <h2>{t("h3")}</h2>
          {!sended && t("r3")}
          {sended && t("r1")}
        </div>
        {!sended && (
          <>
            <div className="sendForm">
              <input
                ref={nameRef}
                className="formName"
                type="text"
                placeholder={t("r4")}
              />
              <textarea
                ref={textRef}
                className="formReview"
                name="review"
                placeholder={t("r5")}
              ></textarea>
              <Button className="formButton" onClick={sendForm} primary={true}>
                {t("r6")}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default memo(function WindowContacts({ data }) {
  const { t } = useTranslation(WINDOW_APP_CONTACTS);
  return <Window data={data} title={t("title")} content={<Contacts />} />;
});
