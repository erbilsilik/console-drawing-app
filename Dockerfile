FROM node:14-alpine as builder

WORKDIR /application
COPY package*.json ./

FROM builder
RUN npm install
COPY . .
