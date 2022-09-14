Rails.application.routes.draw do

   namespace :api do
    resources :greetings, only: [:index]
  end

  root 'root#index'

   get '*greet', to: "root#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
