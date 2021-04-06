# README

* **Server Side: Rails v6.1.3.1**
* **Front End: Angular v11.2.8**
* **Database: SQLite3**

```
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 11.2.7
Node: 12.22.0
OS: linux x64

Angular: 11.2.8
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... platform-server, router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1102.7
@angular-devkit/build-angular   0.1102.7
@angular-devkit/core            11.2.7
@angular-devkit/schematics      11.2.7
@angular/cdk                    11.2.7
@angular/cli                    11.2.7
@angular/flex-layout            9.0.0-beta.29
@angular/material               11.2.7
@schematics/angular             11.2.7
@schematics/update              0.1102.7
rxjs                            6.5.3
typescript                      4.1.5
webpack                         4.41.4
```

### 開発環境の準備
**【Docker開発環境】**  
```
$ git clone https://github.com/sokamur-phoenix-sample/sample.git
$ cd sample
$ docker-compose up -d --build
$ docker-compose exec app bundle exec rails db:migrate
$ docker-compose exec app bundle exec rails db:seed
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
$ npm run build
※VM等に環境構築している場合は、3000/4200ポートをフォワードしてください。 
$ ssh -L 3000:localhost:3000 user_name@Dev-Host(開発環境ホスト)  
$ ssh -L 4200:localhost:4200 user_name@Dev-Host(開発環境ホスト)  

* Rails 起動  
$ cd sample （別ターミナル等）  
$ bundle exec rails s -b 0.0.0.0  
* URL
<http://Dev-Host(開発環境ホスト):3000>
```
