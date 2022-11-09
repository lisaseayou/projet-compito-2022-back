FROM node:lts AS DEPENDENCIES

WORKDIR /app

COPY package*.json ./
COPY .env ./
COPY tsconfig.json ./

COPY . .

RUN yarn

EXPOSE 4000

CMD yarn dev & npx nodemon -w package.json --exec "yarn"