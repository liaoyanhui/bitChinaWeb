/*
 * @Description:
 * @Author: 尚夏
 * @Date: 2021-06-30 16:29:12
 * @LastEditTime: 2021-07-15 15:46:09
 * @FilePath: /bit-china/pages/_document.js
 */

import Document, { Html, Head, Main, NextScript } from 'next/document';
// import favicon from '../public/static/images/favicon.png';

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx)
  //     return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument