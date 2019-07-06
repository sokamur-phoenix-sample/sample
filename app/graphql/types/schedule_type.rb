module Types
  class ScheduleType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: true
    field :all_day, Boolean, null: true
    field :start, String, null: true
    field :end, String, null: true
    field :background_color, String, null: true
    field :border_color, String, null: true
    field :text_color, String, null: true
    field :user_id, Int, null: true
    field :contractor_id, Int, null: true
  end
end
