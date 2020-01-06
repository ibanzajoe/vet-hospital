FROM node:10

WORKDIR /server
EXPOSE 8080
CMD npm run start

ADD package.json /tmp/package.json
ADD yarn.lock /tmp/yarn.lock
RUN cd /tmp && yarn

ADD ./ /server
RUN mv /tmp/node_modules /server


