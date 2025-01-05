import QueryButton from "./QueryButton";
import "./About.css";

function LibIcon({ src, href, title }) {
  return (
    <a href={href} target="_blank">
      <img src={src} alt={title} />
    </a>
  );
}

export default function About() {
  return (
    <div className="section about mwem25">
      Данная страница является моим PET-проектом.<br />Подробнее обо мне в разделе{" "}
      <QueryButton
        title="Контакты"
        query="contacts"
        subActionAllow={false}
        inline={true}
      >
        контакты
      </QueryButton>
      .
      <br />
      <a href="https://github.com/lucors/lucors-webpage">Репозиторий проекта</a>
      <br />
      <br />
      Продолжая пользоваться сайтом вы соглашаетесь с условиями использования
      файлов <code className="language-none">cookie</code>.
      <br />
      <br />
      Для отображения контента с других страниц данного домена или внешних
      доменных имен используется <code className="language-none">iframe</code>.
      <br />
      Состояние окон сохраняется на вашем устройстве в хранилище{" "}
      <code className="language-none">LocalStorage</code>.
      <br />
      <br />
      На странице используются сторонние библиотеки:
      <br />
      <div className="libs">
        <LibIcon
          title="React"
          src="img/logo-react.png"
          href="https://react.dev/"
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
