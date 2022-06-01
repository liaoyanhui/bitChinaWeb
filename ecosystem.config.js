/*
 * @Description: 
 * @Author: 尚夏
 * @Date: 2021-07-02 11:42:12
 * @LastEditTime: 2021-07-15 11:05:05
 * @FilePath: /bit-china/ecosystem.config.js
 */
module.exports = {
  apps: [{
    name: "bitchina",
    script: "npm start",
    watch: false,
    // 不用监听的文件 watch 为true时 有效
    ignore_watch: [
      'node_modules',
      'logs'
    ],
    // 自定义应用程序的错误日志文件(错误日志文件)
    error_file: './logs/app-err.log',
    // 自定义应用程序日志文件(正常日志文件)
    out_file: './logs/app-out.log',
    // 指定日志文件的时间格式
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    // 设置追加日志而不是新建日志
    merge_logs: true,
  }]
}
