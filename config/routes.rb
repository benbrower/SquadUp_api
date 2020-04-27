# frozen_string_literal: true

Rails.application.routes.draw do
  resources :followed_games
  resources :accounts
  resources :stats
  resources :games
  resources :friendships
  resources :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :drinks
  end

  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  # !request.xhr? && request.format.html?
  # end
  # autoformats to:
  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
                                                                     !request.xhr? && request.format.html?
                                                                   }
end
