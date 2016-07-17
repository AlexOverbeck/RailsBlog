var ArticleList = React.createClass({
  componentWillMount: function() {
    ArticleStore.init(this.props.articles);
    this.updateState();
  },

  componentDidMount: function() {
    ArticleStore.addChangeListener(this.updateState);
  },

  componentWillUnmount: function() {
    ArticleStore.removeChangeListener(this.updateState);
  },

  updateState: function() {
    this.setState({
      articles: ArticleStore.articles
    });
  },

  render: function() {
    return (
      <div className='row'>
        {this.state.articles.map(function(article) {
          return (
            <Article
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description} />
          )
      })}
      </div>
    );
  }
});
