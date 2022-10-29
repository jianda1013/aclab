FROM node:16-alpine

WORKDIR /usr/local/src

RUN apk update
RUN apk add vim git

RUN npm install --location=global nodemon

COPY package.json .

RUN npm install

CMD ["npm", "run", "dev"]