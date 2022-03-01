RSpec.configure do |config|
  config.before(:each) do |example|
    if example.metadata[:type] == :system
      driven_by :selenium, using: :headless_chrome, screen_size: [1920, 1080]
    else
      driven_by :rack_test
    end
  end
end
