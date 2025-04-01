FROM node:18

WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm run build