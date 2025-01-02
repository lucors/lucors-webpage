import { useRef, useState } from "react";
import axios from "axios";
import "./Contacts.css";

export default function Contacts() {
  const [sended, setSended] = useState(false);
  const textRef = useRef(null);

  const sendForm = () => {
    if (!textRef?.current?.value) return;
    const formData = new FormData();
    formData.append("review", textRef.current.value);
    axios
      .post("https://lucors.ru/send_rev.php", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        setSended(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="contactsContent">
      <div className="aboutmeField">
        <span className="aboutmeText">
          Меня зовут Максим и я создатель этого сайта. <br />
          Родился в России, в Саратове. <br />
          Отучился на бакалавра в Саратовском государственном университете имени
          Н. Г. Чернышевского на Механико-математическом факультете, там же и
          пристрастился к веб-технологиям. <br />
          На данный момент работаю в IT сфере на должности автоматизатора
          тестирования. <br />
          <br />
          Выбранный мною псевдоним <code>lucors (ˈlukərz)</code> не имеет
          какого-либо конкретного смысла и выступает скорее вольной реализацией
          моего желания иметь лаконичный никнейм. <br />
          <br />
          Ниже представлены ссылки по которым вы можете со мной связаться, а
          также мои аккаунты в Git хостах, где я храню свои репозитории. <br />
          Спасибо, что посетили мой сайт <span className="heart">❤</span> <br />
        </span>

        <div className="aboutmeHrefs">
          <a
            className="about aboutmeTg"
            href="https://t.me/lucors"
            title="Страница ВК"
          >
            Телеграм
          </a>
          <a
            className="about aboutmeYamail"
            href="mailto:thesourcecode.max@yandex.ru"
            title="Эл. Почта"
          >
            Я.Почта
          </a>
          <a
            className="about aboutmeVk"
            href="https://vk.com/lucors"
            title="Страница ВК"
          >
            ВК
          </a>
          <a
            className="about aboutmeGitHub"
            href="https://github.com/lucors"
            title="Профиль в GitHub"
          >
            GitHub
          </a>
          <a
            className="about aboutmeGitLab"
            href="https://gitlab.com/lucors-dev"
            title="Профиль в GitLab"
          >
            GitLab
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
};
