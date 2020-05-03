# frozen_string_literal: true

Rails.application.routes.draw do
  resources :followed_games
  resources :accounts
  resources :stats
  resources :games
  resources :friendships
  resources :users
  devise_for :admin_users, ActiveAdmin::Devise.config

  post 'users' => 'users#create'
  get '/users/:id/friends', to: 'users#friends'
  get '/users/:id/friend_requests', to: 'users#friend_requests'
  get '/users/:id/pending_friends', to: 'users#pending_friends'

  get 'users/new' => 'users#new', as: :new_user
  ActiveAdmin.routes(self)

  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  # !request.xhr? && request.format.html?
  # end
  # autoformats to:
  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
                                                                     !request.xhr? && request.format.html?
                                                                   }
end
