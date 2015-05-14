Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show]
    resources :products, except: [:new, :edit] do
      collection do
        post :vote
      end
    end
    resources :comments, only: [:create, :update, :destroy]
    resources :collections, except: [:new, :edit]
    get 'api/products/vote', :to => 'products#vote'
  end

end
