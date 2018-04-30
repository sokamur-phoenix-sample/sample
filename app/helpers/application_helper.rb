module ApplicationHelper
  def webpack_asset_path(path)
    if Rails.env.development?
      return "http://localhost:4200/#{path}"
    end
  end
end
