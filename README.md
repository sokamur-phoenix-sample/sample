# README

* **Server Side: Rails v5.1.3**
* **Front End: Angular v7.2.6**
* **Database: SQLite3**

```
Angular CLI: 7.3.3
Node: 9.11.2
OS: linux x64
Angular: 7.2.6

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.13.3
@angular-devkit/build-angular     0.13.3
@angular-devkit/build-optimizer   0.13.3
@angular-devkit/core              7.3.3
@angular-devkit/schematics        7.3.3
@angular/cdk                      7.3.3
@angular/cli                      7.3.3
@angular/flex-layout              7.0.0-beta.23
@angular/material                 7.3.3
@schematics/angular               7.3.3
@schematics/update                0.13.3
rxjs                              6.4.0
typescript                        3.1.6
webpack                           4.29.5
```

### 開発環境の準備
**【Docker開発環境】**  
```
$ git clone https://github.com/sokamur-phoenix-sample/sample.git  
$ cd sample  
$ docker-compose up -d --build  
$ docker-compose exec web bundle exec rails db:migrate  
$ docker-compose exec web bundle exec rails db:seed  
* URL
<http://localhost:3000>
```

**【Docker以外の開発環境準備（Local/VirtualBox etc...）】**  
```
$ git clone https://github.com/sokamur-phoenix-sample/sample.git  
$ cd sample  
$ bundle install --path vendor/bundle  
$ bundle exec rails db:migrate  
$ bundle exec rails db:seed  
$ cd sample/frontend  
$ npm install  

* Angular 起動  
$ cd sample/frontend  
$ npm run start  
※VM等に環境構築している場合は、4200ポートをフォワードしてください。  
$ ssh -L 4200:localhost:4200 user_name@Dev-Host(開発環境ホスト)  

* Rails 起動  
$ cd sample （別ターミナル等）  
$ bundle exec rails s -b 0.0.0.0  
* URL
<http://Dev-Host(開発環境ホスト):3000>
```
