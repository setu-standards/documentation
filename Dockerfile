FROM node:lts as build

WORKDIR /app

COPY app/package.json app/package-lock.json /app/

RUN npm install

COPY app/ /app/

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html/docs
COPY ./nginx-conf /etc/nginx/conf.d
