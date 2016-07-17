var Article = React.createClass({
  removeArticle: function(event) {
    ArticleActions.removeArticle(this.props.id);
    event.preventDefault();
  },

  render: function() {
    return (
      <div className="col s12 m4 l4">
        <div className="card small">
          <div className="card-content">
            <span className="card-title">{this.props.title}</span>
            <p>{this.props.description}</p>
          </div>
          <div className="card-action">
            <a href='#'>Edit</a>
            <a href='#'>Show</a>
            <a href="#" onClick={this.removeArticle}>Delete</a>
          </div>
        </div>
      </div>
    );
  }
});
