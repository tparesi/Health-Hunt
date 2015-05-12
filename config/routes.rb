Rails.application.routes.draw do

  root to: "sessions#new"
  resources :users, only: [:create, :new, :show, :destroy, :edit, :update]
  resource :session, only: [:create, :new, :destroy]
end
