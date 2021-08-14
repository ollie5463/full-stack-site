 # syntax=docker/dockerfile:1
 FROM node:12-alpine
 RUN apk add --no-cache python g++ make
 WORKDIR /app
 COPY package.json yarn.lock ./
 COPY . .
 EXPOSE 3000
 RUN yarn install
 CMD yarn start