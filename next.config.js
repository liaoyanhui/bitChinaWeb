/*
 * @Description: 
 * @Author: 尚夏
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2021-07-14 18:17:14
 * @FilePath: /bit-china/next.config.js
 */

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');


module.exports = {
  // reactStrictMode: true,
  compress: false, // 禁止 node gzip压缩 走服务端gzip压缩 
  // generateBuildId: async () => {
  //   return 'v1'
  // },
  distDir: 'build',
  // webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
  //   config.plugins.push(new HtmlWebpackPlugin({ favicon: path.resolve('public/favicon.ico') }))
  //   return config;
  // },

}
