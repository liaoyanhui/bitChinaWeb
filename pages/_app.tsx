/*
 * @Description:
 * @Author: 尚夏
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2021-11-12 16:44:54
 * @FilePath: /bit-china/pages/_app.tsx
 */
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.scss";
// import "../styles/Swiper.module.scss";
import styles from "../styles/Header.module.css";

function MyApp({ router, Component, pageProps }: AppProps) {
  const [hideFooter, setHideFooter] = useState<boolean>(false);
  const [ownHeaderClass, setOwnHeaderClass] = useState<boolean>(false);

  useEffect(() => {
    if (router.route === "/") {
      setHideFooter(false);
      setOwnHeaderClass(false);
    } else {
      setOwnHeaderClass(true);
      setHideFooter(false);
      // if (router.route === "/PrivacyClause" || router.route === "/UserClause") {
      //   setHideFooter(true);
      // } else {
      //   setHideFooter(false);
      // }
    }
  }, [router.route]);

  return (
    <>
      {/* <div id="modal"></div> */}
      <Layout
        hideFooter={hideFooter}
        ownHeaderClass={ownHeaderClass && styles.ownHeaderClass}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
