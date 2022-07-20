FROM node:lts

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY prisma ./

COPY . .

RUN yarn

# RUN npx prisma generate
EXPOSE 4000

CMD yarn dev & npx nodemon -w package.json --exec "yarn"