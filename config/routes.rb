Rails.application.routes.draw do
  get 'baseball-players', to: 'baseball_players#index'
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :baseball_players, only: [:index, :show, :create, :update]
    end
  end
end
