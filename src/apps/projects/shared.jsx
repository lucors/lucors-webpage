import {cmds} from "#apps/console/shared.jsx";
import {getSingletonAppCreator} from "#common/utils.js";
import {lazy} from "react";
import i18next from "i18next";
import {AppMeta} from "#common/apps.js";

const TYPE = "app_projects";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowProjects")),
  getSingletonAppCreator(TYPE, null, null,
    {
      width: "50em",
      height: "20em",
    }),
  "img/projects.png");

i18next.addResourceBundle("en", TYPE, {
  title: "Projects",
  archiveTitle: "Archive",
  projectsShowCurrent: "Show current",
  projectsShowArchive: "Show archived",
  projectLogo: "Project logotype",
  projectInfo: "About project",
  inNewTab: "Open in new tab",
  start: "Open in window",
  download: "Download",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "Проекты",
  archiveTitle: "Архив",
  projectsShowCurrent: "Показать текущие",
  projectsShowArchive: "Показать архив",
  projectLogo: "Логотип проекта",
  projectInfo: "Информация о проекте",
  inNewTab: "В новой вкладке",
  start: "В окно",
  download: "Скачать",
});

cmds.set("projects", () => {
  META.createApp();
  return "Открываю проекты";
});
