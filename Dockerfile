FROM node:alpine3.17

WORKDIR /app

COPY package.json .

RUN npm install

CMD [ 'node', 'index.js']

EXPOSE 3030