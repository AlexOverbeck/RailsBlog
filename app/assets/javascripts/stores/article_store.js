var AppDispatcher = new Flux.Dispatcher();

var CHANGE_EVENT = 'change';

var FluxEmitter = new EventEmitter();

var ArticleStore = {
  init: function(articles) {
    this.articles = articles;
    this.registerStore();
  },

  registerStore: function() {
    this.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {
      case 'REMOVE_ARTICLE':
        this.removeArticle(action.data.id, function(){
          FluxEmitter.emit(CHANGE_EVENT);
        });
        break;

      default:
        // do nothing
      }
    }.bind(this));
  },

  removeArticle: function(id, callback){
    console.log('Remove Article ID: ' + id);
    callback();
  },

  addChangeListener: function(callback) {
    FluxEmitter.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    FluxEmitter.removeListener(CHANGE_EVENT, callback);
  },

};
