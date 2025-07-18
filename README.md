# README

* **Server Side: Rails v8.0**
* **Front End: Angular v20.0.3**
* **Database: SQLite3**

```
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 20.0.3
Node: 22.16.0
Package Manager: npm 11.4.2
OS: linux x64

Angular: 20.0.3
... animations, cdk, common, compiler, compiler-cli, core, forms
... language-service, material, platform-browser
... platform-browser-dynamic, platform-server, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.2000.2
@angular-devkit/build-angular   20.0.2
@angular-devkit/core            20.0.2
@angular-devkit/schematics      20.0.2
@angular/cli                    20.0.2
@schematics/angular             20.0.2
rxjs                            6.6.7
typescript                      5.8.3
zone.js                         0.15.1
```

### 開発環境の準備
**【Docker開発環境】**  
```
$ git clone https://github.com/sokamur-phoenix-sample/sample.git
$ cd sample
$ docker compose up -d --build
$ docker compose exec app bin/rails db:migrate
$ docker compose exec app bin/rails db:seed
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
