FROM node:16-alpine

COPY package*.json .
COPY tsconfig.json .

RUN npm install
RUN npm install --location=global nodemon

RUN apk update
RUN apk add vim git

CMD ["nodemon", "src"]