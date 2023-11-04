FROM node:latest as build

WORKDIR /apps

RUN npm cache clean --force

COPY . .

RUN npm install

RUN npm run build:app

FROM nginx:latest

RUN apt-get update && apt-get install -y npm

RUN npm install -g json-server

COPY db.json db.json

RUN rm -rf /usr/share/nginx/html

COPY --from=build /apps/dist/ /usr/share/nginx/html/

COPY /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

EXPOSE 3001

COPY start.sh /start.sh

RUN chmod +x /start.sh

CMD ["/start.sh"]
