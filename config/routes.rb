Rails.application.routes.draw do
  root to: "sessions#new"

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :products, except: [:new, :edit]
  end
end
