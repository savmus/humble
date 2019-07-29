class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username], 
            params[:user][:password]
        )

        if @user.nil?
            render json: ['Your email and/or password were incorrect.']
        else
            login(@user)
            render 'api/users/show'; # change later
        end
    end

    def destroy
        if logged_in?
            logout
            render json: {}
        else
            render json: ['Page not found.'], status: 404
        end
    end
end
