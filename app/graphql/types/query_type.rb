module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :schedules, Types::ScheduleType.connection_type, null: true,
      description: "Array of Schedules" do
      argument :user_id, Int, required: false
      argument :contractor_id, Int, required: false
    end

    def schedules(args = {})
      schedules = Schedule.all
      schedules =  schedules.where(user_id: args[:user_id]) if args[:user_id].present?
      schedules =  schedules.where(contractor_id: args[:contractor_id]) if args[:contractor_id].present?
      schedules
    end

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end
  end
end
