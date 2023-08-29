# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

BaseballPlayer.create!(name:'大谷 翔平', team:'ロサンゼルス・エンジェルス', position:'投手兼DH', hometown:'岩手県')
BaseballPlayer.create!(name:'岡本 和真', team:'読売ジャイアンツ', position:'一塁手', hometown:'奈良県')
BaseballPlayer.create!(name:'佐々木 朗希', team:'千葉ロッテマリーンズ', position:'投手', hometown:'岩手県')
Schedule.create!(title: "スケジュール", all_day: true, start: Time.zone.now, end: Time.zone.now + 30.minutes, background_color: "orange", border_color: "blue", text_color: "blue", user_id: 1, contractor_id: 1)