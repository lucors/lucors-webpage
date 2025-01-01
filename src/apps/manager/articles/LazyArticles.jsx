import QueryButton from "#common/QueryButton";

export default function LazyArticles() {
  return (
    <div className="section arcticle-list">
      <h2>Список категорий статей</h2>
      <QueryButton
        title="Общее"
        query="article-category-common"
      >
        Общее
      </QueryButton>
    </div>
  );
}
