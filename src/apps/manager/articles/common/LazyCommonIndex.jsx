import QueryButton from "#apps/manager/QueryButton.jsx";

export default function LazyCommonIndex() {
  return (
    <div className="section arcticle-list">
      <nav>
        <ul>
          <QueryButton
            title="Статьи"
            query="articles"
            subActionAllow={false}
            inline={true}
          >
            Статьи
          </QueryButton>
          <li className="sep"></li>
          <QueryButton
            title="Общее"
            query="article-category-common"
            subActionAllow={false}
            inline={true}
          >
            Общее
          </QueryButton>
        </ul>
      </nav>
      <h2>Список статей. Категория "Общее"</h2>
      <QueryButton title="Технология MapReduce" query="article-map-reduce">
        Технология MapReduce
      </QueryButton>
    </div>
  );
}
