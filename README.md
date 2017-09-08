# README

* **Server Side: Rails v5.1.3**
* **Front End: Angular v4.4.0-RC.0**
* **Database: SQLite3**

* **【開発環境の準備】**  
`$ git clone git@github.com:sokamur-phoenix-sample/sample.git`   
`$ cd sample`   
`$ bundle install --path vendor/bundle`  
`$ bundle exec rails db:migrate`  
`$ bundle exec rails db:seed`   
`$ cd sample/frontend`  
`$ npm install`  
* Angular 起動  
`$ cd sample/frontend`  
`$ npm run webpack-dev-server`  
*※VM等に環境構築しているばあいは、4200ポートをフォワードしてください。*  
`$ ssh -L 4200:localhost:4200 user_name@Dev-Host(開発環境ホスト)`
* Rails 起動  
`$ cd sample （別ターミナル等）`  
`$ bundle exec rails s -b 0.0.0.0`　　
* URL
<http://Dev-Host(開発環境ホスト):3000>
