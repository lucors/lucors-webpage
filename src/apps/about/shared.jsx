import {cmds} from "#apps/console/shared.jsx";
import {getSingletonAppCreator} from "#common/utils.js";
import {lazy} from "react";
import i18next from "i18next";
import {AppMeta} from "#common/apps.js";

const TYPE = "app_about";

export const META = new AppMeta(
  TYPE,
  lazy(() => import("./WindowAbout")),
  getSingletonAppCreator(TYPE, null, null,
    {
      width: "50em",
      height: "20em",
    }),
  "img/about.png");

i18next.addResourceBundle("en", TYPE, {
  title: "About page",
  a1: "This website is my PET project.",
  a2: "More about me in the section",
  a3: "Project Repository",
  a4: "By continuing to use this site you agree with",
  a4C: "cookie policy",
  a5: "To display content from other pages on this domain or external domain names, this site uses",
  a6: "State of windows is saved on your device using ",
  a7: "This website uses third-party libraries:",
  contacts: "\"about me\"",
});
i18next.addResourceBundle("ru", TYPE, {
  title: "О сайте",
  a1: "Данная страница является моим PET-проектом.",
  a2: "Подробнее обо мне в разделе",
  a3: "Репозиторий проекта",
  a4: "Продолжая пользоваться сайтом вы соглашаетесь с условиями использования файлов",
  a4C: "cookie",
  a5: "Для отображения контента с других страниц данного домена или внешних доменных имен используется",
  a6: "Состояние окон сохраняется на вашем устройстве посредством ",
  a7: "На странице используются сторонние библиотеки:",
  contacts: "\"обо мне\"",
});

cmds.set("about", () => {
  META.createApp();
  return "Открываю \"О сайте\"";
});
