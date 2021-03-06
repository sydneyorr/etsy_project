Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :things
    get 'products', to: 'products#index'
    get 'categories', to: 'products#categories'
    get 'categories/:category', to: 'products#category'
    get 'sellers', to: 'sellers#index'
    get 'seller_categories', to: 'sellers#seller_categories'
    get 'sellers/:seller', to: 'sellers#show'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
