import { useRef, useState } from "react";
import axios from "axios";
import "./Contacts.css";

export default function Contacts() {
  const [sended, setSended] = useState(false);
  const textRef = useRef(null);
  const nameRef = useRef(null);

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
      <div className="aboutmeField">
        <span className="aboutmeText">
          <div className="avatar-container">
            <div className="text">
              <div className="makishimudesu">
                Привет! <br /> Меня зовут...<div className="name">Максим</div>
              </div>
              <div>
                Также известен как <code className="language-none">lucors</code>
              </div>
              <div className="watashinopage">Я создатель этого сайта</div>
            </div>
            <img className="avatar" src="img/logo-avatar-small-alpha.png" alt="Моё фото" />
          </div>
          Родился в России, в{" "}
          <a href="https://ru.wikipedia.org/wiki/Саратов" target="_blank">
            Саратове
          </a>
          . <br />
          Отучился на бакалавра в{" "}
          <a href="https://www.sgu.ru/" target="_blank">
            СГУ имени Н. Г. Чернышевского
          </a>{" "}
          на Механико-математическом факультете, там же и пристрастился к
          веб-технологиям. <br />
          На данный момент работаю в IT сфере на должности автоматизатора
          тестирования. <br />
          <br />
          Выбранный мною псевдоним{" "}
          <code className="language-none">lucors (ˈlukərz)</code>
          <img
            className="playLucors"
            src="img/play-sound.png"
            alt="Звук"
            onClick={playLucors}
          />{" "}
          не имеет какого-либо конкретного смысла и выступает скорее вольной
          реализацией моего желания иметь лаконичный никнейм. <br />
          <br />
          Ниже представлены ссылки по которым вы можете со мной связаться, а
          также мои аккаунты в Git хостах, где я храню свои репозитории. <br />
          Спасибо, что посетили мой сайт <span className="heart">❤</span> <br />
        </span>

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
            title="Вконтакте"
          >
            <img src="img/contact-vk.png" />
          </a>
          <a
            target="_blank"
            className="about aboutmeYamail"
            href="mailto:thesourcecode.max@yandex.ru"
            title="Почта Яндекс"
          >
            <img src="img/contact-ya.png" />
          </a>
          <a
            className="about aboutmeGmail"
            href="mailto:lucors.dev@gmail.com"
            title="Почта Gmail"
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

      <div className="contactsField">
        {sended && <h3 className="reviewSent">Ваш отзыв отправлен</h3>}
        {!sended && (
          <>
            <span className="contactsText">
              <h3>У вас есть жалобы или идеи?</h3>
              Вы можете также использовать данную анонимную форму, для связи со
              мной.
            </span>
            <div className="sendForm">
              <input
                ref={nameRef}
                className="formName"
                type="text"
                placeholder="Имя"
              />
              <textarea
                ref={textRef}
                className="formReview"
                name="review"
                placeholder="Отзыв"
              ></textarea>
              <input
                className="formButton"
                type="submit"
                value="Отправить"
                title="Отправить"
                onClick={sendForm}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
