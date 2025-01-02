import { memo } from "react";
import QueryButton from "./QueryButton";
import Window from "#main/windows/Window";
import FrameButton from "#apps/frame/FrameButton.jsx";
import { contentMenu } from "./shared";
import Welcome from "./Welcome";
import Contacts from "./Contacts";
import Projects from "./Projects";
import Archive from "./Archive";
import Href2Window from "./Href2Window";
import About from "./About";
import Articles from "./articles/Articles";
import CommonIndex from "./articles/common/CommonIndex";
import ArticleMapreduce from "./articles/common/ArticleMapreduce";


const contentType = {
  "main-page": <Welcome />,
  contacts: <Contacts />,
  projects: <Projects />,
  archive: <Archive />,
  "external-app": <Href2Window />,
  about: <About />,
  // Статьи
  articles: <Articles />,
  "article-category-common": <CommonIndex />,
  "article-map-reduce": <ArticleMapreduce />,
};

export default memo(function WindowExplorer({ data }) {
  return (
    <Window
      data={data}
      menu={contentMenu.map((v) => {
        if (v.query) {
          return (
            <QueryButton
              key={v.id}
              title={v.title}
              query={v.query}
              winid={data.id}
            >
              {v.title}
            </QueryButton>
          );
        }
        return (
          <FrameButton key={v.id} title={v.title} href={v.href} icon={v.icon}>
            {v.title}
          </FrameButton>
        );
      })}
      content={contentType[data.query]}
    />
  );
});
