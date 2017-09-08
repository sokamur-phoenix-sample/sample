class Api::V1::BaseballPlayersController < Api::V1::BaseController
  before_action :set_baseball_player, only: [:show, :update]

  def index
    @baseball_players = BaseballPlayer.all.order(:id)
  end

  def show
  end

  def update
  end

  private

  def set_baseball_player
    @baseball_player = BaseballPlayer.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def baseball_player_params
    params.require(:baseball_player).permit(
      :name, :team, :positon, :hometown
    )
  end

end
