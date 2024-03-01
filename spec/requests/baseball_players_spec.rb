require "swagger_helper"

RSpec.describe "BaseballPlayers", type: :request do
  describe "GET api/v1/baseball_players" do
    path "/api/v1/baseball_players" do
      get "GET baseball_players" do
        consumes "application/json"
        produces "application/json"
        response 200, "baseball_players" do
          schema type: :array, items: {
            type: :object,
            example: {
              id: 1,
              name: "大谷 翔平",
              team: "ロサンゼルス・ドジャース",
              position: "２番DH",
              hometown: "岩手県"
            }
          }

          before do
            get api_v1_baseball_players_path
          end

          it "succeeds to responde with success" do
            expect(response).to have_http_status(:success)
          end
        end
      end
    end
  end
end
