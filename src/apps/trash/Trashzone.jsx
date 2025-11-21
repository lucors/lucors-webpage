import { createFrame } from "#apps/frame/shared.jsx";
import ActionNewWindow from "#common/ActionNewWindow.jsx";
import Link from "#common/Link.jsx";
import "./Trashzone.css";
import i18next from "i18next";
import {META} from "./shared";
import {useTranslation} from "react-i18next";

i18next.addResourceBundle("en", META.type, {
  h1: "Welcome to the trash zone",
  h2: "Only trash inside this page",
});
i18next.addResourceBundle("ru", META.type, {
  h1: "Добро пожаловать в корзину",
  h2: "Тут только отборный хлам",
});

export default function Trashzone() {
  const {t} = useTranslation(META.type);

  return (
    <div id="trashcanContent" className="section">
      <h1>{t("h1")}</h1>
      <h4>{t("h2")}</h4>

      <Link
        href="https://lucors.ru/jekarws-game/"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame("JekaRWS.game", "https://lucors.ru/jekarws-game/")
            }
          />
        }
      >
        JekaRWS.game
      </Link>

      <Link
        href="https://lucors.ru/jekaclicker"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame("ЖекаКликер", "https://lucors.ru/jekaclicker")
            }
          />
        }
      >
        ЖекаКликер
      </Link>

      <Link
        href="https://lucors.ru/vicecity"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame("Engels city", "https://lucors.ru/vicecity")
            }
          />
        }
      >
        Engels city
      </Link>

      <Link
        href="https://lucors.ru/andruxa"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame("Андрей Скалетта", "https://lucors.ru/andruxa")
            }
          />
        }
      >
        Андрей Скалетта
      </Link>

      <Link
        href="https://lucors.ru/dimon"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() => createFrame("Генералы", "https://lucors.ru/dimon")}
          />
        }
      >
        Генералы
      </Link>

      <Link
        href="https://lucors.ru/jekarws"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() => createFrame("ЖекаRWS", "https://lucors.ru/jekarws")}
          />
        }
      >
        ЖекаRWS
      </Link>

      <Link
        href="https://lucors.ru/leha"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() => createFrame("Ведьмак 4", "https://lucors.ru/leha")}
          />
        }
      >
        Ведьмак 4
      </Link>

      <Link
        href="https://lucors.ru/rotor"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() => createFrame("Rotor", "https://lucors.ru/rotor")}
          />
        }
      >
        Rotor
      </Link>

      <Link
        href="https://lucors.ru/wolf"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame("Волк говорит", "https://lucors.ru/wolf")
            }
          />
        }
      >
        Волк говорит
      </Link>

      <Link
        href="https://lucors.ru/stepuha"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame(
                "Сколько осталось до степухи",
                "https://lucors.ru/stepuha"
              )
            }
          />
        }
      >
        Сколько осталось до степухи
      </Link>
    </div>
  );
}
