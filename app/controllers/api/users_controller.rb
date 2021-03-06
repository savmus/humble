class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.new(user_params)

        if @user.save
            Follow.create(user_id: @user.id, followee_id: @user.id)
            login(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def index
        @users = User.all
        
        render 'api/users/index'
    end

    def show
        @user = User.find(params[:id])
        @posts = @user.posts
        @follows = @user.followships
        @followers = @user.fanships

        render 'api/users/show'
    end

    def update
        @user = User.find(params[:id])
        if @user && @user.update_attributes(user_params)
          render 'api/users/show'
        elsif !@user
          render json: ['user does not exist :('], status: 400
        else
          render json: @user.errors.full_messages, status: 401
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user
          @user.destroy
          render nothing: true, status: :ok
        else
          render json: ['We could not find that user.'], status: 400
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :avatar, :blog_title, :blog_description)
    end
end