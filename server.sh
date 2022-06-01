###
 # @Description: 服务端运行脚本
 # @Author: 尚夏
 # @Date: 2021-07-02 11:17:58
 # @LastEditTime: 2021-07-15 11:04:47
 # @FilePath: /bit-china/server.sh
### 

#!/bin/bash -ilex
#step1 npm 模块
npm install

#step2 打包
npm run build

#step3 pm2 运行
pm2 delete bitchina
pm2 start ecosystem.config.js -- run start