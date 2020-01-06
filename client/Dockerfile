FROM node:10

WORKDIR /client
EXPOSE 3000
CMD npm run dev

ADD package.json /tmp/package.json
ADD yarn.lock /tmp/yarn.lock
RUN cd /tmp && yarn

ADD ./ /client
RUN mv /tmp/node_modules /client

RUN  npm run build
