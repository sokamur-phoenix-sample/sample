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
    field :test, String, null: true

    def start
      object.start.to_s.slice(0, 19)
    end

    def end
      object.end.to_s.slice(0, 19)
    end
  end
end
