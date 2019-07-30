class Api::BlogsController < ApplicationController
    def create
        @blog = Blog.new(blog_params)
        if @blog.save
            render 'api/blogs/show'
        else
            render json: @blog.errors.full_messages, status: 401
        end
    end

    def index
        @blogs = Blog.all
        render 'api/blogs/index'
    end

    def show
        @blog = Blog.find_by(params[:id])
        render 'api/blogs/show'
    end

    def update
        @blog = Blog.find_by(params[:id])
        if @blog && @blog.update_attributes(blog_params)
          render 'api/blogs/show'
        elsif !@blog
          render json: ['Blog does not exist :('], status: 400
        else
          render json: @blog.errors.full_messages, status: 401
        end
    end

    def destroy
        @blog = Blog.find_by(params[:id])
        if @blog
          @blog.destroy
          render 'api/blogs/index' # change later
        else
          render json: ['We could not find that blog.'], status: 400
        end
    end

    private

    def blog_params
        params.require(:blog).permit(:title, :handle)
    end
end
