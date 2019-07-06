# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

BaseballPlayer.create!(name:'坂本 勇人', team:'読売ジャイアンツ', position:'内野手', hometown:'兵庫県')
BaseballPlayer.create!(name:'鳥谷 敬', team:'阪神タイガース', position:'内野手', hometown:'東京都')
BaseballPlayer.create!(name:'菅野 智之', team:'読売ジャイアンツ', position:'投手', hometown:'神奈川県')
BaseballPlayer.create!(name:'筒香 嘉智', team:'横浜ＤｅＮＡベイスターズ', position:'内野手', hometown:'和歌山県')
BaseballPlayer.create!(name:'マイコラス', team:'読売ジャイアンツ', position:'投手', hometown:'アメリカ')
BaseballPlayer.create!(name:'松井 裕樹', team:'東北楽天ゴールデンイーグルス', position:'投手', hometown:'神奈川県')
Schedule.create!(title: "スケジュール", all_day: true, start: Time.zone.now, end: Time.zone.now + 30.minutes, background_color: "orange", border_color: "blue", text_color: "blue", user_id: 1, contractor_id: 1)