# README

* **Server Side: Rails v6.1.4.1**
* **Front End: Angular v12.1.2**
* **Database: SQLite3**

```
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 13.0.1
Node: 16.13.0
Package Manager: npm 8.1.0
OS: linux x64

Angular: 13.0.0
... animations, cdk, common, compiler, compiler-cli, core, forms
... language-service, material, platform-browser
... platform-browser-dynamic, platform-server, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1300.1
@angular-devkit/build-angular   13.0.1
@angular-devkit/core            13.0.1
@angular-devkit/schematics      13.0.1
@angular/cli                    13.0.1
@angular/flex-layout            9.0.0-beta.29
@schematics/angular             13.0.1
rxjs                            6.6.7
typescript                      4.4.4
webpack                         4.41.4
```

### 開発環境の準備
**【Docker開発環境】**  
```
$ git clone https://github.com/sokamur-phoenix-sample/sample.git
$ cd sample
$ docker-compose up -d --build
$ docker-compose exec app bin/rails db:migrate
$ docker-compose exec app bin/rails db:seed
* URL
<http://localhost:3000>
```

**【Docker以外の開発環境準備（Local/VirtualBox etc...）】**  
```
$ git clone https://github.com/sokamur-phoenix-sample/sample.git  
$ cd sample
$ bundle config set --local path 'vendor/bundle'
$ bundle install
$ bin/rails db:migrate
$ bin/rails db:seed

* Angular 起動  
$ cd sample/frontend
$ npm install
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
