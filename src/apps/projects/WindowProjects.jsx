import {memo, useState} from "react";
import Window from "#windows/Window";
import "./WindowProjects.css";
import {META} from "./shared";
import {useTranslation} from "react-i18next";
import {TITLE_KEY} from "#common/consts.js";
import {createFrame} from "#apps/frame/shared.jsx";
import Button from "#common/Button.jsx";
import {META as appMetaAbout} from "#apps/about/shared.jsx";

// TODO: Использовать БД
// TODO: ID не в ту сторону))
const projects = [
  {
    id: -1,
    name: "Godot Demo",
    shortname: "prj-godot-demo",
    logo: "godotExample.png",
    frameAllow: false,
    startHref: "https://lucors.ru/emergency-procedure",
  },
  {
    id: 0,
    name: "Screen Portals",
    shortname: "prj-screen-portals",
    logo: "screenPortalsProject.png",
    infoHref: "https://github.com/lucors/screen-portals",
  },
  {
    id: 1,
    name: "Todo App",
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
    infoHref: "https://github.com/lucors/escards",
  },
  {
    id: 8,
    name: "Web-игра Chaotic",
    shortname: "",
    logo: "chaoticProject.png",
    icon: "https://chaotic.lucors.ru/assets/img/favicon.png",
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
    infoButton: appMetaAbout.createApp,
  },
];

const archive = [
  {
    id: 13,
    name: "Авто-Планировщик записей ВК",
    shortname: "",
    logo: "vkautoplanner.png",
    infoHref: "https://github.com/Lucors/vkpostplanner",
  },
  {
    id: 14,
    name: "Content Dynamic Change Script",
    shortname: "",
    logo: "cdcs.png",
    startHref: "http://lucors.ru/cdcs/",
    infoHref: "http://lucors.ru/cdcs/",
  },
  {
    id: 15,
    name: "Задание по дисциплине ООП (WEB UI)",
    shortname: "",
    logo: "wtProject.png",
    infoHref: "https://github.com/Lucors/ooptask-appweb",
  },
  {
    id: 16,
    name: "Задание по дисциплине ООП (GUI)",
    shortname: "",
    logo: "qtProject.png",
    infoHref: "https://github.com/Lucors/ooptask-appgui",
  },
  {
    id: 17,
    name: "Задание по дисциплине ООП (CLI)",
    shortname: "",
    logo: "cppProject.png",
    infoHref: "https://github.com/Lucors/ooptask-appconsole",
  },
  {
    id: 18,
    name: "Приложение на PySide (БД видеокарт)",
    shortname: "",
    logo: "qtProject.png",
    infoHref: "https://github.com/Lucors/pyside-sqlite",
  },
  {
    id: 19,
    name: "Простой калькулятор на Qt5",
    shortname: "",
    logo: "qtProject.png",
    infoHref: "https://github.com/Lucors/qt-calc",
  },
  {
    id: 20,
    name: "Матанализ 2й семестр",
    shortname: "",
    logo: "pyProject.png",
    startHref: "https://lucors.ru/projects/math2/math.php",
    downloadHref: "https://lucors.ru/projects/math2/math.py",
  },
  {
    id: 21,
    name: "Расчет параметра стохастичности",
    shortname: "",
    logo: "pyProject.png",
    startHref: "https://lucors.ru/projects/stochasticity.php",
    downloadHref: "https://lucors.ru/projects/stochasticity.py",
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
                          infoButton,
                          downloadHref,
                        }) {
  const {t} = useTranslation(META.type);

  return (
    <div shortname={shortname} className="projectBox">
      <img
        className="projectLogo"
        src={`projects/${logo}`}
        alt={t("projectLogo")}
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
              title={t("projectInfo")}
            >
              <img className="projectAboutImg" src="img/project-about.svg"/>
            </a>
          )}
          {infoButton && (
            <a
              className="projectAboutA"
              title={t("projectInfo")}
              onClick={infoButton}
            >
              <img className="projectAboutImg" src="img/project-about.svg"/>
            </a>
          )}
          {startHref && (
            <>
              <a
                className="projectStartA"
                target="_blank"
                href={startHref}
                title={t("inNewTab")}
              >
                <img
                  className="projectStartImg"
                  src="img/project-external.svg"
                />
              </a>
              {frameAllow && (
                <div
                  className="projectStartA"
                  title={t("start")}
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
              title={t("download")}
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

function Projects() {
  const {t} = useTranslation(META.type);
  const [isArchive, setIsArchive] = useState(false);

  return (
    <>
      <div className="projectsRoot section">
        <Button
          title={isArchive ? t("projectsTitle") : t("archiveTitle")}
          onClick={() => setIsArchive(!isArchive)}
          inline={false}
          primary={true}
          className="center archive-button"
        >
          {isArchive ? t("projectsShowCurrent") : t("projectsShowArchive")}
        </Button>
        {(isArchive ? archive : projects).map((v) => (
          <Project key={v.id} {...v} />
        ))}
      </div>
    </>
  );
}

export default memo(function WindowContacts({data}) {
  const {t} = useTranslation(META.type);
  return <Window data={data} title={t(TITLE_KEY)} icon={META.icon} content={<Projects/>}/>;
});
