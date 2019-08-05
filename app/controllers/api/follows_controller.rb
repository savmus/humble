class Api::FollowsController < ApplicationController
    def create
        @follow = Follow.new
        @follow.followee_id = params[:id]
        @follow.user_id = current_user.id

        unless @follow.save
          render json: @follow.errors.full_messages, status: 401
        end

        @user = User.find(params[:id])
        @posts = @user.posts

        render '/api/users/show'
    end

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy

        @user = User.find(params[:id])
        @posts = @user.posts

        render '/api/users/show'
    end
end