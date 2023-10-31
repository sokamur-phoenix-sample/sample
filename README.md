# README

* **Server Side: Rails v7.0.2**
* **Front End: Angular v15.2.8**
* **Database: SQLite3**

```
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 16.2.8
Node: 18.18.2
Package Manager: npm 10.2.1
OS: linux x64

Angular: 16.2.11
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... platform-server, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.8
@angular-devkit/build-angular   16.2.8
@angular-devkit/core            16.2.8
@angular-devkit/schematics      16.2.8
@angular/cdk                    16.2.10
@angular/cli                    16.2.8
@angular/material               16.2.10
@schematics/angular             16.2.8
rxjs                            6.6.7
typescript                      4.9.5
zone.js                         0.13.3

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

**【Kubernetes/minikube 環境】**
```
$ minikube start --driver=docker --logtostderr -v 8 --extra-config=apiserver.service-node-port-range=80-30000
[minikube 環境に Docker イメージを作成]
$ (eval $(minikube docker-env) && docker build -t webapp:0.0.1 -f Dockerfile.k8s .)
[マニフェストのデプロイ]
$ kubectl apply -f .k8s/manifests/webapp.yaml
[kubectl port-forward コマンドで webapp-service へアクセス可能にする]
$ kubectl port-forward --address 0.0.0.0 -n default service/webapp-service 3000:3000
$ curl -I http://localhost:3000
HTTP/1.1 200 OK
```
