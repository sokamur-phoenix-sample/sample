# README

* **Server Side: Rails v6.0.2.1**
* **Front End: Angular v8.2.14**
* **Database: SQLite3**

```
$ ng version


     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 8.3.21
Node: 10.16.3
OS: linux x64
Angular: 8.2.14
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, platform-server
... router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.803.21
@angular-devkit/build-angular     0.803.21
@angular-devkit/build-optimizer   0.803.21
@angular-devkit/build-webpack     0.803.21
@angular-devkit/core              8.3.21
@angular-devkit/schematics        8.3.21
@angular/cdk                      8.2.3
@angular/cli                      8.3.21
@angular/flex-layout              8.0.0-beta.27
@angular/http                     7.2.15
@angular/language-service         7.2.15
@angular/material                 8.2.3
@ngtools/webpack                  8.3.21
@schematics/angular               8.3.21
@schematics/update                0.803.21
rxjs                              6.5.3
typescript                        3.4.5
webpack                           4.41.4
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
