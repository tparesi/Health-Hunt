Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  get "/auth/:provider/callback", to: "sessions#omniauth"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show]
    resources :products, except: [:new, :edit] do
      member do
        post :vote
      end
    end
    resources :users, only: [:show] do
      member do
        post :follow
      end
    end
    resources :comments, only: [:create, :update, :destroy]
    resources :collections, except: [:new, :edit]
    get 'api/products/vote', :to => 'products#vote'

    get "search", to: "static_pages#search"
  end

end
