FROM node:20.10.0-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

RUN apk update && apk upgrade
RUN apk add git

RUN apk add bash

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json yarn.lock

COPY ./package.json .
RUN npm install

RUN npm install -g sequelize-cli

COPY . .

CMD npm run dev