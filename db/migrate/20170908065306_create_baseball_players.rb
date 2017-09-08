class CreateBaseballPlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :baseball_players do |t|
      t.string :name
      t.string :team
      t.string :position
      t.string :hometown

      t.timestamps
    end
  end
end
