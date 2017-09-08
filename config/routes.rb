Rails.application.routes.draw do
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :baseball_players, only: [:index, :show, :create, :update]
    end
  end
end
