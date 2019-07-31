Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :blogs, only: [:create, :index, :show, :update, :destroy] do
      resources :posts, only: [:create, :index]
    end
    resources :posts, only: [:update, :destroy]
  end
end
