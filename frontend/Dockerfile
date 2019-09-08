FROM node:10.16.3-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install

COPY . /app
RUN npm rebuild node-sass

CMD ["npm", "start"]
