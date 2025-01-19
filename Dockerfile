FROM node:20

WORKDIR /usr/src/app/runner-demo

# 使用 --omit=dev 替代 --production
COPY package*.json ./
RUN npm i -g @nestjs/cli --registry=https://registry.npmmirror.com
RUN npm install --registry=https://registry.npmmirror.com

COPY . .

RUN npm run build

EXPOSE 3000

# 删除以下行，因为它会在构建镜像时启动应用程序
# RUN npm run start:test

# 启动应用程序
CMD ["npm", "run", "start:test"]