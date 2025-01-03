import { memo } from "react";
import QueryButton from "./QueryButton";
import Window from "#main/windows/Window";
import FrameButton from "#apps/frame/FrameButton.jsx";
import { managerMenu } from "./shared";
import Welcome from "./Welcome";
import Contacts from "./Contacts";
import Projects from "./Projects";
import Archive from "./Archive";
import About from "./About";
import Articles from "./articles/Articles";
import CommonIndex from "./articles/common/CommonIndex";
import ArticleMapreduce from "./articles/common/ArticleMapreduce";
import Button from "#common/Button.jsx";

const contentType = {
  "main-page": <Welcome />,
  contacts: <Contacts />,
  projects: <Projects />,
  archive: <Archive />,
  about: <About />,
  // Статьи
  articles: <Articles />,
  "article-category-common": <CommonIndex />,
  "article-map-reduce": <ArticleMapreduce />,
};

function Menu({ winid }) {
  return managerMenu.map((v) => {
    if (v.onClick) {
      return <Button key={v.id} onClick={v.onClick}>{v.title}</Button>;
    }
    if (v.query) {
      return (
        <QueryButton key={v.id} title={v.title} query={v.query} winid={winid}>
          {v.title}
        </QueryButton>
      );
    }
    return (
      <FrameButton key={v.id} title={v.title} href={v.href} icon={v.icon}>
        {v.title}
      </FrameButton>
    );
  });
}

export default memo(function WindowExplorer({ data }) {
  return (
    <Window
      data={data}
      menu={<Menu winid={data.id} />}
      content={contentType[data.query]}
    />
  );
});
