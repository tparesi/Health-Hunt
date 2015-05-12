Rails.application.routes.draw do
  resources :users, only: [:create, :new, :show, :destroy, :edit, :update]

  resource :session, only: [:create, :new, :destroy]
end
