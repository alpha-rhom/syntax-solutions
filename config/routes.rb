Rails.application.routes.draw do
  resources :user_likes
  resources :comments
  resources :libraries, constraints: ->(request){ !request.format.html? }
  devise_for :users
  
  get :search, controller: :main
  get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
  root to: 'pages#unprotected'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
