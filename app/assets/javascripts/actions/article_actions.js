var ArticleActions = {
  removeArticle: function(id) {
    AppDispatcher.dispatch({
      actionType: 'REMOVE_ARTICLE',
      data: {
        id: id
      }
    });
  }
}
