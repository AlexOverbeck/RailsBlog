var ArticleList = React.createClass({
  componentWillMount: function() {
    ArticleStore.init(this.props.articles);
  },

  render: function() {
    return (
      <div className='row'>
        {ArticleStore.articles.map(function(article) {
          return (
            <Article
              key={article.id}
              title={article.title}
              description={article.description} />
          )
      })}
      </div>
    );
  }
});
