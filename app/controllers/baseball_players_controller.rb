class BaseballPlayersController < ApplicationController
  require "csv"

  def index
    render file: "public/index.html"
  end

  def csv_download
    header = %w[チーム 名前]
    baseball_players = BaseballPlayer.all
    generate_csv(header, baseball_players) do |datum|
      [
        datum.team,
        datum.name
      ]
    end
  end

  private

  def generate_csv(header, collection = [], &_block)
    bom = %w[EF BB BF].map { |e| e.hex.chr }.join
    csv_date = CSV.generate(bom) do |csv|
      csv << header
      collection.each do |datum|
        csv <<
          if block_given?
            yield(datum)
          else
            datum
          end
      end
    end
    send_data csv_date, filename: "baseball_players.csv", type: "text/csv; charset=utf-8"
  end
end
