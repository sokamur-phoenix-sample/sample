# Capybara.register_driver :headless_chrome do |app|
#   options = Selenium::WebDriver::Chrome::Options.new
#   options.add_argument('headless')
#   options.add_argument('disable-gpu')
#   options.add_argument('no-sandbox')
#   client = Selenium::WebDriver::Remote::Http::Default.new
#   client.open_timeout = client.read_timeout = 300
#   Capybara::Selenium::Driver.new(app, browser: :chrome, options: options, http_client: client)
# end

# Capybara.configure do |config|
#   config.javascript_driver = :headless_chrome
#   config.raise_server_errors = false
# end

RSpec.configure do |config|
  config.before(:each) do |example|
    if example.metadata[:type] == :system
      driven_by :selenium, using: :headless_chrome, screen_size: [1920, 1080]
    else
      driven_by :rack_test
    end
  end
end
