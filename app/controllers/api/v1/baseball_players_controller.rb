class Api::V1::BaseballPlayersController < Api::V1::BaseController

  def index
    @baseball_players = BaseballPlayer.all.order(:id)
  end

  def show
  end

  def create
  end

  def update
  end

end
