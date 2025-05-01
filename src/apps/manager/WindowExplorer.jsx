import { memo } from "react";
import QueryButton from "./QueryButton";
import Window from "#windows/Window";
import FrameButton from "#apps/frame/FrameButton.jsx";
import { contentMenu, managerMenu, WINDOW_APP_MANAGER, WINDOW_ICON } from "./shared";
import Welcome from "./Welcome";
import Contacts from "./Contacts";
import Projects from "./Projects";
import About from "./About";
import Articles from "./articles/Articles";
import CommonIndex from "./articles/common/CommonIndex";
import ArticleMapreduce from "./articles/common/ArticleMapreduce";
import Button from "#common/Button.jsx";
import { useTranslation } from "react-i18next";

const contentType = {
  "main-page": <Welcome />,
  contacts: <Contacts />,
  projects: <Projects isArchive={false} />,
  archive: <Projects isArchive={true} />,
  about: <About />,
  // Статьи
  articles: <Articles />,
  "article-category-common": <CommonIndex />,
  "article-map-reduce": <ArticleMapreduce />,
};

function Menu({ winid }) {
  const {t} = useTranslation(WINDOW_APP_MANAGER);

  return managerMenu.filter((v) => !v.hide).map((v) => {
    const title = t(v.title);
    if (v.onClick) {
      return (
        <Button key={v.id} onClick={v.onClick}>
          {title}
        </Button>
      );
    }
    if (v.query) {
      return (
        <QueryButton key={v.id} title={title} query={v.query} winid={winid}>
          {title}
        </QueryButton>
      );
    }
    return (
      <FrameButton key={v.id} title={title} href={v.href} icon={v.icon}>
        {title}
      </FrameButton>
    );
  });
}

export default memo(function WindowExplorer({ data }) {
  const {t} = useTranslation(WINDOW_APP_MANAGER);
  const title = t((contentMenu.find(v => v.query === data.query)?.title || "menu1"));
  return (
    <Window
      data={data}
      icon={WINDOW_ICON}
      title={title}
      menu={<Menu winid={data.id} />}
      content={contentType[data.query]}
    />
  );
});
