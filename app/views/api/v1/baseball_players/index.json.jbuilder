json.baseball_players @baseball_players do |player|
  json.extract! player, :id, :name, :team, :position, :hometown
end
