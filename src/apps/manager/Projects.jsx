import { createFrame } from "#apps/frame/shared.js";
import "./Projects.css";

// TODO: Использовать БД
// TODO: ID не в ту сторону))
const projects = [
  {
    id: 0,
    name: "Screen Portals",
    shortname: "prj-screen-portals",
    logo: "screenPortalsProject.png",
    infoHref: "https://github.com/lucors/screen-portals",
  },
  {
    id: 1,
    name: "React Todo App",
    shortname: "prj-react-todo",
    logo: "reactTodoProject.png",
    icon: "https://lucors.ru/todo/logo192.png",
    frameAllow: true,
    startHref: "https://lucors.ru/todo/",
    infoHref: false,
  },
  {
    id: 2,
    name: "Socket.io Chat",
    shortname: "prj-iochat",
    logo: "iochatProject.png",
    icon: "https://lucors.ru/iochat/assets/img/favicon.png",
    frameAllow: true,
    startHref: "https://lucors.ru/iochat",
    infoHref: "https://github.com/lucors/iochatclient",
  },
  {
    id: 3,
    name: "Bad Apple Base64",
    shortname: "prj-b64apple",
    logo: "b64appleProject.png",
    icon: "https://lucors.ru/b64apple/assets/img/favicon.png",
    frameAllow: true,
    startHref: "https://lucors.ru/b64apple",
    infoHref: "https://github.com/lucors/b64apple",
  },
  {
    id: 4,
    name: "Phone cover",
    shortname: "prj-phone",
    logo: "phoneProject.png",
    icon: "https://lucors.ru/phone_cover/assets/img/favicon.png",
    frameAllow: true,
    startHref: "https://lucors.ru/phone_cover",
    infoHref: false,
  },
  {
    id: 5,
    name: "Portal radio",
    shortname: "prj-pradio",
    logo: "pradioProject.png",
    icon: "https://lucors.ru/portal_radio/assets/img/favicon.png",
    frameAllow: true,
    startHref: "https://lucors.ru/portal_radio",
    infoHref: false,
  },
  {
    id: 6,
    name: "Симметричная кисть",
    shortname: "",
    logo: "symbrushProject.png",
    icon: "img/exe.svg",
    frameAllow: true,
    startHref: "https://lucors.ru/symbrush",
  },
  {
    id: 7,
    name: "Бесконечные карты",
    shortname: "",
    logo: "escardsProject.png",
    icon: "https://escards.lucors.ru/assets/img/favicon.png",
    frameAllow: true,
    startHref: "https://escards.lucors.ru/",
    infoHref: "https://github.com/lucors/escards",
  },
  {
    id: 8,
    name: "Web-игра Chaotic",
    shortname: "",
    logo: "chaoticProject.png",
    icon: "https://chaotic.lucors.ru/assets/img/favicon.png",
    frameAllow: true,
    startHref: "https://chaotic.lucors.ru/",
    infoHref: "https://github.com/lucors/chaotic",
  },
  {
    id: 9,
    name: "Семантичекие сети",
    shortname: "",
    logo: "snProject.png",
    startHref: "https://lucors.ru/semantic",
  },
  {
    id: 10,
    name: "Задача о ходе коня",
    shortname: "",
    logo: "knightProject.png",
    startHref: "https://lucors.ru/knight/",
    infoHref: "https://github.com/lucors/knights-tour-lsp",
  },
  {
    id: 11,
    name: "Тест теней (Canvas)",
    shortname: "",
    logo: "cnvShadowProject.png",
    icon: "img/exe.svg",
    frameAllow: true,
    startHref: "https://lucors.ru/shadow_canvas",
  },
  {
    id: 12,
    name: "Веб-сайт lucors.ru",
    shortname: "",
    logo: "lucorsPageProject.png",
    icon: "img/lucors-logo.svg",
    frameAllow: true,
    startHref: "https://lucors.ru/",
  },
];

export function Project({
  shortname,
  logo,
  name,
  icon,
  frameAllow,
  startHref,
  infoHref,
  downloadHref,
}) {
  function openFrame() {
    console.log(`Открыть фрейм "${startHref}"`);
  }

  return (
    <div shortname={shortname} className="projectBox">
      <img
        className="projectLogo"
        src={`projects/${logo}`}
        alt="Логотип проекта"
      />
      <div className="projectBottom">
        <span className="projectName" title={name}>
          {name}
        </span>
        <div className="actions">
          {infoHref && (
            <a
              className="projectAboutA"
              target="_blank"
              href={infoHref}
              title="Информация о проекте"
            >
              <img className="projectAboutImg" src="img/project-about.svg" />
            </a>
          )}
          {startHref && (
            <>
              <a
                className="projectStartA"
                target="_blank"
                href={startHref}
                title="В новой вкладке"
              >
                <img
                  className="projectStartImg"
                  src="img/project-external.svg"
                />
              </a>
              {frameAllow && (
                <div
                  className="projectStartA"
                  title="Запустить"
                  onClick={() => createFrame(name, startHref, icon)}
                >
                  <img
                    className="projectStartImg"
                    src="img/project-frame.svg"
                  />
                </div>
              )}
            </>
          )}
          {downloadHref && (
            <a
              className="projectDownloadA"
              target="_blank"
              href={downloadHref}
              title="Скачать"
            >
              <img
                className="projectDownloadImg"
                src="img/project-download.svg"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projectsRoot section">
      {projects.map((v) => (
        <Project key={v.id} {...v} />
      ))}
    </div>
  );
}
