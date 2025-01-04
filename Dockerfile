FROM node:18

# 设置工作目录
WORKDIR /usr/src/app

# 复制依赖文件并安装
COPY package*.json ./
RUN npm install --production

# 复制项目文件
COPY . .

# 构建项目
RUN npm run build

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["node", "dist/main.js"]
