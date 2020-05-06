FROM node:12-alpine

ENV APP_HOME=/home/node/frontend
ENV PATH=$PATH:/home/node/frontend/node_modules/.bin

RUN mkdir $APP_HOME

USER node
WORKDIR $APP_HOME

USER root
ADD . $APP_HOME
RUN chown -R node:node /home/node/*
