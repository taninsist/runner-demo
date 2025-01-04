FROM node:20

WORKDIR /usr/src/app/runner-demo

# 使用 --omit=dev 替代 --production
COPY package*.json ./
RUN npm i -g @nestjs/cli --registry=https://registry.npmmirror.com
RUN npm install --registry=https://registry.npmmirror.com

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main.js"]