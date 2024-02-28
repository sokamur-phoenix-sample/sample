require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET api/v1/baseball_players" do
    before do
      get api_v1_baseball_players_path
    end

    it "succeeds to responde with success" do
      expect(response).to have_http_status(:success)
    end
  end
end