/*
 * @Description: 
 * @Author: 尚夏
 * @Date: 2021-07-05 10:09:06
 * @LastEditTime: 2022-02-24 11:19:02
 * @FilePath: /bit-china/server.js
 */

const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const devProxy = {
  // '/v1': {
  //   target: 'http://192.168.50.110/fil/client/v1',
  //   changeOrigin: true,
  //   pathRewrite: { '^/v1': '' },
  // },
  // '/enroll': {
  //   target: 'http://192.168.50.110/app/preinstall/device/enroll',
  //   changeOrigin: true,
  //   pathRewrite: { '^/enroll': '' },
  // }
  '/v1': {
    // target: 'https://api.yunjieipfs.com/fil/client/v1',
    target: 'https://api.cloudworldhk.com/fil/client/v1',
    changeOrigin: true,
    pathRewrite: { '^/v1': '' },
  },
  '/enroll': {
    // target: 'https://api.yunjieipfs.com/app/preinstall/device/enroll',
    target: 'https://api.cloudworldhk.com/app/preinstall/device/enroll',
    changeOrigin: true,
    pathRewrite: { '^/enroll': '' },
  }
}

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    // if (dev && devProxy) {
    Object.keys(devProxy).forEach(function (context) {
      server.use(createProxyMiddleware(context, devProxy[context]))
    })
    // }

    server.all('*', (req, res) => {
      handle(req, res)
    })

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })