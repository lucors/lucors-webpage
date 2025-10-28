import {memo} from "react";
import Window from "#windows/Window";
import "./WindowTesting.css";
import {META} from "./shared";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import {TITLE_KEY} from "#common/consts.js";
import Code from "#common/Code.jsx";

i18next.addResourceBundle("en", META.type, {
  h1: "Oops!",
  c1: "This section isn't ready yet.",
});
i18next.addResourceBundle("ru", META.type, {
  h1: "Упс!",
  c1: "Раздел еще не готов.",
});

function Content() {
  const {t} = useTranslation(META.type);

  return (
    <div className="testing-resume">
      <div className="section">
        <h2>{t("h1")}</h2>
        {t("c1")} <br/>
        <Code lang="java">
          {`
try (FileInputStream fin = new FileInputStream("cat.obj");
  ObjectInputStream in = new ObjectInputStream(fin)) {
  Cat cat = (Cat) in.readObject();
} catch (IOException | ClassNotFoundException e) {
  e.printStackTrace();
}`}
        </Code>
      </div>
    </div>
  );
}

export default memo(function WindowTesting({data}) {
  const {t} = useTranslation(META.type);
  return <Window data={data} title={t(TITLE_KEY)} icon={META.icon} content={<Content/>}/>;
});
