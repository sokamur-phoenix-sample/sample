json.baseball_player do |json|
  json.extract! @baseball_player, :id, :name, :team, :position, :hometown
end
