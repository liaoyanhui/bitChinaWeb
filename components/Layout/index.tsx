/*
 * @Description: 布局组件
 * @Author: 尚夏
 * @Date: 2021-07-06 14:31:29
 * @LastEditTime: 2021-08-23 10:00:38
 * @FilePath: /bit-china/components/Layout/index.tsx
 */

import React, { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import styles from "../../styles/App.module.css";
import Header from "../Header";
import HTMLHead from "../Head";
import { useRouter } from "next/router";

interface layoutProps {
  children: React.ReactNode;
  ownHeaderClass?: any; // 自定义头部样式
  hideFooter?: boolean; // 是否隐藏底部组件
}

export default function Layout(props: layoutProps) {
  const router = useRouter();
  // const { hideFooter = false, ownHeaderClass } = props;

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <div className={styles.container}>
      <HTMLHead />
      {router.pathname === "/" && <Header />}
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}
