import { Project } from "./Projects";
import "./Projects.css";

// TODO: Использовать БД
const projects = [
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

export default function Archive() {
  return (
    <div className="projectsRoot">
      {projects.map((v) => (
        <Project key={v.id} {...v} />
      ))}
    </div>
  );
}
