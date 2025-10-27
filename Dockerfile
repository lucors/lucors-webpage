FROM node:22-alpine as build

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . /app/

RUN npm run build


FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
