class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        if @post.save
            render 'api/posts/index'
        else
            render json: @post.errors.full_messages, status: 401
        end
    end

    def index
        @posts = Post.all
        render 'api/posts/index'
    end

    def update
        @post = Post.find_by(params[:id])
        if @post && @post.update_attributes(post_params)
          render 'api/posts/index'
        elsif !@post
          render json: ['Post does not exist :('], status: 400
        else
          render json: @post.errors.full_messages, status: 401
        end
    end

    def destroy
        @post = Post.find_by(params[:id])
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
