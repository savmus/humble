class Api::PostsController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        @post.blog_id = params[:blog_id]

        if @post.save
            render 'api/posts/index'
        else
            render json: @post.errors.full_messages, status: 401
        end
    end

    def index
        @posts = if params[:blog_id]
                  Post.where(blog_id: params[:blog_id])
                else
                  Post.all
                end
        render 'api/posts/index'
    end

    def show
      @post = Post.find(params[:id])
      render 'api/posts/index'
    end

    def update
        @post = Post.find(params[:id])
        if @post && @post.update_attributes(post_params)
          render 'api/posts/index'
        elsif !@post
          render json: ['Post does not exist :('], status: 400
        else
          render json: @post.errors.full_messages, status: 401
        end
    end

    def destroy
        @post = Post.find(params[:id])
        if @post
          @post.destroy
          render 'api/posts/index'
        else
          render json: ['We could not find that post.'], status: 400
        end
    end

    private

    def post_params
        params.require(:post).permit(:title, :url, :caption, :summary, :description, :post_type)
    end
end
