FROM node:latest

WORKDIR /app

COPY . /app

COPY package.json .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "./dist/index.js"]