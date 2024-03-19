FROM ubuntu:20.04

ENV DEBIAN_FRONTEND noninteractive

RUN apt update -qq && \
    apt install -y --no-install-recommends curl git npm && \
    apt clean && rm -rf /tmp/* var/tmp/*

WORKDIR /home

RUN npm install -g yarn typescript n
RUN n 16 && npm install sequelize sequelize-cli pg

COPY migrations /home/migrations
COPY config /home/config

RUN curl -O https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x wait-for-it.sh

CMD ["./wait-for-it.sh", "db:5432", "--", "npx", "sequelize-cli", "db:migrate"]
