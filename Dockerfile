FROM node:latest

WORKDIR /app

COPY ./ ./

RUN npm install express node

CMD ["node","server.js"]