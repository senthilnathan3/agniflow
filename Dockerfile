FROM node:20-alpine

WORKDIR /app

RUN npm install -g next

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

RUN pnpm build

COPY . .

CMD ["pnpm", "run", "dev"]