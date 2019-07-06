class CreateSchedules < ActiveRecord::Migration[5.1]
  def change
    create_table :schedules do |t|
      t.string :title
      t.boolean :all_day
      t.datetime :start
      t.datetime :end
      t.string :background_color
      t.string :border_color
      t.string :text_color
      t.integer :user_id
      t.integer :contractor_id

      t.timestamps
    end
  end
end
