FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY tscondig*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]