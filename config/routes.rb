Rails.application.routes.draw do

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  root to: "application#index"
  post "/graphql", to: "graphql#execute"
  get "/csv_download", to: "baseball_players#csv_download"
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :baseball_players, only: [:index, :show, :create, :update]
    end
  end
  get "/*path", to: "application#index"
end
