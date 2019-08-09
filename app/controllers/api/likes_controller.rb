class Api::LikesController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        @like = Like.new
        @like.user_id = current_user.id
        @like.post_id = params[:id]

        if @like.save
          @post = @like.liked_post
          render 'api/posts/index'
        else
          render json: @like.errors.full_messages, status: 401
        end
    end

    def destroy
        @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
        @post = @like.liked_post
        @like.destroy

        render 'api/posts/index'
    end
end
