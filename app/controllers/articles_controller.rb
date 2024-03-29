class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :edit, :update, :destroy]

    def index
      render component: 'ArticleList', props: { articles: Article.all }
    end

    def new
        @article = Article.new
    end

    def create
        @article = Article.new(article_params)
        if @article.save
            flash[:notice] = "Article was created"
            redirect_to articles_path
        else
            render :new
        end
    end

    def show
    end

    def edit
    end

    def update
        if @article.update(article_params)
            flash[:notice] = "Article was updated"
            redirect_to articles_path
        else
            render :new
        end
    end

    def destroy
      @article.destroy
      respond_to do |format|
        format.js
      end
    end

    private

    def set_article
        @article = Article.find(params[:id])
    end

    def article_params
        params.require(:article).permit(:title, :description)
    end

end
