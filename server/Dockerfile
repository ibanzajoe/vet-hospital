FROM node:10

WORKDIR /server
EXPOSE 8080
COPY ./package.json .

RUN yarn

COPY . .

CMD yarn start
