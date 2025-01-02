import { createFrame } from "#apps/frame/shared.js";
import ActionNewWindow from "#common/ActionNewWindow.jsx";
import Link from "#common/Link.jsx";

export default function Trashzone() {
  return (
    <div id="trashcanContent" className="section">
      <h1>Welcome to the trash zone</h1>
      <h4>Only trash inside this page</h4>

      <Link
        href="https://lucors.ru/jekarws-game-2/"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame("JekaRWS.game 2", "https://lucors.ru/jekarws-game-2/")
            }
          />
        }
      >
        JekaRWS.game 2
      </Link>

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
        href="https://lucors.ru/avb64"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame("Ansible Vault Base64", "https://lucors.ru/avb64")
            }
          />
        }
      >
        Ansible Vault Base64
      </Link>

      <Link
        href="https://lucors.ru/tc_tracking"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame("Контроль ТК", "https://lucors.ru/tc_tracking")
            }
          />
        }
      >
        Контроль ТК
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
        href="https://lucors.ru/old_ui"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame("Старый дизайн", "https://lucors.ru/old_ui")
            }
          />
        }
      >
        Старый дизайн
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

      <Link
        href="https://lucors.ru/ipsilon/addon/"
        target="_blank"
        subAction={
          <ActionNewWindow
            onClick={() =>
              createFrame(
                "Фейк IpsilonUni (БД)",
                "https://lucors.ru/ipsilon/addon/"
              )
            }
          />
        }
      >
        Фейк IpsilonUni (БД)
      </Link>
    </div>
  );
}
