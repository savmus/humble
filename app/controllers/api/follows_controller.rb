class Api::FollowsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @follow = Follow.new
        @follow.user_id = current_user.id
        @follow.followee_id = params[:id]

        if @follow.save
          @followee = @follow.followee
          render 'api/posts/index'
        else
          render json: @follow.errors.full_messages, status: 401
        end
    end

    def destroy
        @follow = Follow.find_by(user_id: current_user.id, followee_id: params[:id])
        @followee = @follow.followee
        @follow.destroy

        render 'api/posts/index'
    end
end