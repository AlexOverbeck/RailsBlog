var ArticleList = React.createClass({
  getInitialState: function() {
    return this.props;
  },

  componentDidMount: function() {
    ArticleStore.init(this.props.articles);
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
            <Article key={article.id} {...article} />
          )
      })}
      </div>
    );
  }
});
