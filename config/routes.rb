Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show]
    resources :products, except: [:new, :edit]
    resources :comments, only: [:create, :update, :destroy]
    resources :collections, except: [:new, :edit]
  end

  get 'api/products/vote', :to => 'products#vote'
end
