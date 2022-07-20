FROM node:lts

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY .env ./
COPY tsconfig.json ./

COPY . .

RUN yarn

EXPOSE 4000

CMD yarn dev & npx nodemon -w package.json --exec "yarn"