class Api::UsersController < ApplicationController
    # protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render 'api/users/show' # change later
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end