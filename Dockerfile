FROM node:20

WORKDIR /usr/src/app/runner-demo

COPY package*.json ./
RUN npm i -g @nestjs/cli --registry=https://registry.npmmirror.com
RUN npm install --registry=https://registry.npmmirror.com

COPY . .

RUN npm run build

EXPOSE 3000

# 使用 node 命令直接运行编译后的文件，而不是通过 npm scripts
CMD ["node", "dist/main"]