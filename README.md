<!--
 * @Description:
 * @Author: 尚夏
 * @Date: 2021-06-29 14:12:13
 * @LastEditTime: 2021-08-06 09:39:49
 * @FilePath: /bit-china/README.md
-->

# CloudWorld 网络官网

## 项目地址

git clone git@github.com:bitchina-io/web.git

## 项目主要使用的技术

- **next.js** 一款基于 react 的框架 适用于服务端渲染 利于 SEO
- **react** javascript 框架
- **PM2** node 进程管理工具，可以利用它来简化很多 node 应用管理的繁琐任务，如性能监控、自动重启、负载均衡等。

## 本地运行项目

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

---

## 服务端部署 (nginx)

### 1. 项目放入服务器

- 拉取当前项目 放入服务器( 可以去除.lock, .ignore 文件 )

### 2. 全局安装 pm2

```bash
npm install pm2 -g
#or
yarn global add pm2
```

### 3. 配置 nginx

```bash
upstream nodenext {
    server 127.0.0.1:3001; #next项目 监听端口 在项目package.json的 script 启动命令中可以自己配置
    keepalive 64;
}
```

```bash
...
server {
    listen       8099;
    server_name  localhost;

    gzip on;
    gzip_proxied any;
    gzip_comp_level 1;
    gzip_types text/css application/javascript image/svg+xml;

    location / {
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://nodenext; #反向代理
    }
    ...
}
```

### 4. 给 server.sh 权限 并且运行

```bash
chmod +x server.sh
./server.sh
```

## 错误日志路径

```bash
/logs/app-err.log
```

---

## PM2 常用命令

1. 启动

- **pm2 start npm --name "projectName"** _projectName 为自定义项目名称（当前项目使用 ecosystem.config.js，即是 name 字段）_

2. 查看进程

- **pm2 list**

3. 停止进程

- **pm2 stop all** _停止 PM2 列表中所有进程_
- **pm2 stop 0** _停止 PM2 列表中进程为 0 的进程_

4. 重启进程

- **pm2 restart all** _重启所有进程_
- **pm2 restart 0** _重启 PM2 列表中进程为 0 的进程_

5. 删除进程

- **pm2 delete all** _删除 PM2 列表中所有的进程_
- **pm2 delete 0** _删除 PM2 列表中进程为 0 的进程_
- **pm2 delete projectName** _删除 PM2 列表中指定项目名称(projectName)的进程_
