FROM node:22-slim

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "node dist/temporal/worker.js & node dist/app.js"]