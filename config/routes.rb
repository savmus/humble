Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index, :show, :update, :destroy] do
      resources :posts, only: [:create, :index]
    end
    resources :posts, only: [:index, :show, :update, :destroy]
    resources :follows, only: [:create]
    delete "/follows", to: "follows#destroy"
    resources :likes, only: [:create]
    delete "/likes", to: 'likes#destroy'
  end
end
