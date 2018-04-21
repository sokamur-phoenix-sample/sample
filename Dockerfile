FROM ruby:2.5.1
ENV LANG C.UTF-8

RUN /bin/cp -f /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN apt-get update -qq && apt-get install -y build-essential libmysql++-dev nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler sqlite3 pry pry-coolline

ENV APP_HOME=/webapp
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD Gemfile $APP_HOME/Gemfile
ADD Gemfile.lock $APP_HOME/Gemfile.lock

RUN bundle install

ADD . $APP_HOME

#RUN npm install frontend/package.json

