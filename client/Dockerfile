FROM node:10

WORKDIR /client
EXPOSE 3000
COPY ./package.json .

RUN yarn

COPY . .

CMD yarn dev
