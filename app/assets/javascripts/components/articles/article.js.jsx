var Article = React.createClass({
  removeArticle: function(event) {
    ArticleActions.removeArticle(this.props.id);
  },

  render: function() {
    return (
      <div className='col s12 m4 l4'>
        <div className='card small'>
          <div className='card-content'>
            <span className='card-title'>{this.props.title}</span>
            <p>{this.props.description}</p>
          </div>
          <div className='card-action'>
            <a href={'/articles/'+this.props.id}>Show</a>
            <a href={'/articles/'+this.props.id+'/edit'}>Edit</a>
            <a href={'/articles/'+this.props.id} onClick={this.removeArticle} data-method='delete' data-remote='true'>
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  }
});
