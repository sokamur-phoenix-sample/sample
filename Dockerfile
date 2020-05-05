FROM ruby:2.5.3
ENV LANG C.UTF-8

RUN /bin/cp -f /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN apt-get update -qq && apt-get install -y build-essential libmysql++-dev nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler sqlite3 pry pry-coolline

ENV APP_HOME=/webapp
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME

