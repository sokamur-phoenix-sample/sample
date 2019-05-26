FROM node:9

RUN npm install -g @angular/cli

ENV APP_HOME=/home/node/frontend
ENV PATH=$PATH:/home/node/frontend/node_modules/.bin

RUN mkdir $APP_HOME
ADD package.json $APP_HOME/package.json
RUN chown -R node:node /home/node/*

USER node
WORKDIR $APP_HOME
RUN npm install

USER root
ADD . $APP_HOME
RUN chown -R node:node /home/node/*

USER node
WORKDIR $APP_HOME

