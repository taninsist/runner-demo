FROM node:20

WORKDIR /usr/src/app/runner-demo

# 使用 --omit=dev 替代 --production
COPY package*.json ./
RUN npm install --omit=dev

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]