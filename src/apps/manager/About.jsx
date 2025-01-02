import QueryButton from "./QueryButton";


export default function About() {
  return (
    <div className="section about mwem25">
      Данная страница является моим PET-проектом. Подробнее обо мне в разделе{" "}
      <QueryButton
        title="Контакты"
        query="contacts"
        subActionAllow={false}
        inline={true}
      >
        контакты
      </QueryButton>
      . <br />
      Этот сайт использует технологию <code className="language-none">AJAX</code> для динамической
      подгрузки контента с сервера без перезагрузки страницы. <br />
      Для отображения контента с других страниц данного домена или внешних
      доменных имен используется <code className="language-none">iframe</code>. Для получения иконок
      внешних страниц используется сервер статики Google:{" "}
      <code className="language-none">https://www.google.com/s2/favicons?</code>. <br />
      Сохранение состояния окон происходит на вашем устройстве посредством{" "}
      <code className="language-none">IndexedDB</code>.<br />
      <br />
      На странице используются библиотеки:
      <ul>
        <li>
          <a href="https://jquery.com/">jquery</a>
        </li>
        <li>
          <a href="https://animejs.com/">animejs</a>
        </li>
        <li>
          <a href="https://prismjs.com/">prism</a>
        </li>
      </ul>
    </div>
  );
}
