require 'rails_helper'

RSpec.describe BaseballPlayer, type: :model do
  describe 'EnvironmentVariable' do
    context 'Variable check' do
      it 'RAILS_ENV' do
        expect(ENV['RAILS_ENV']).to eq 'test'
      end
    end
  end

  describe BaseballPlayer do
    let!(:player) { BaseballPlayer.create(name: 'test player 1') }
    context 'Property check' do
      it 'BaseballPlayer' do
        player1 = BaseballPlayer.find_by!(name: 'test player 1')
        expect(player1.name).to eq 'test player 1'
      end
    end
  end
end
