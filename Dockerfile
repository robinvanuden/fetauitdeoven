FROM node:24 AS build

WORKDIR /app/

COPY . .

RUN npm install

RUN NODE_OPTIONS=--max-old-space-size=4096 npm run build

FROM node:24-slim

WORKDIR /app

COPY --from=build /app/.output/ .

CMD ["node", "server/index.mjs"]