require "rails_helper"

RSpec.describe "Top page", type: :system do
  it "displays top page correctly" do
    visit root_path
    expect(page).to have_content "野球選手一覧"
  end
end
