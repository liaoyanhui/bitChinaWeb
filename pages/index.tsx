/*
 * @Description:
 * @Author: 尚夏
 * @Date: 2021-08-17 14:47:43
 * @LastEditTime: 2022-02-24 10:52:55
 * @FilePath: /bit-china/pages/index.tsx
 */

import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

// 锚点页面
import Home from "./Home";
import PlatformAdv from "./PlatformAdv";
// import Ipfs from './Ipfs'
// import Infomation from './Infomation'
import AboutUs from "./AboutUs";

export default function App() {
  // const router = useRouter();

  const homePageDom = useRef<HTMLDivElement>(null);
  const homeDom = useRef<HTMLDivElement>(null);
  const platformAdvDom = useRef<HTMLDivElement>(null);
  // const ipfsDom = useRef<HTMLDivElement>(null);
  // const infomationDom = useRef<HTMLDivElement>(null);
  const aboutUsDom = useRef<HTMLDivElement>(null);

  const startYRef = useRef<any>(null);

  /**
   * @description: 移动端 touch 结合 锚点 实现页面滚动效果
   * @param {*}
   * @return {*}
   */
  useEffect(() => {
    if (homePageDom.current) {
      // 获取初始触摸y坐标
      homePageDom.current.addEventListener("touchstart", (e: TouchEvent) => {
        startYRef.current = e.changedTouches[0].clientY;
        // alert(startYRef.current);
      });
      // 禁用触摸移动时候滚动条滚动
      homePageDom.current.addEventListener("touchmove", (e: TouchEvent) => {
        e.preventDefault();
      });
      // 触摸结束记录y坐标
      homePageDom.current.addEventListener("touchend", (e: TouchEvent) => {
        if (homePageDom.current) {
          // 获取当前窗口高度 以及滚动条距离顶部高度 计算出倍数 去switchDom匹配dom
          const scrollTop = homePageDom.current.scrollTop;
          const clientHeight = homePageDom.current.clientHeight;
          const multiple: number = scrollTop / clientHeight;
          let endY = e.changedTouches[0].clientY;
          const multipleMath = Math.floor(multiple);

          // 手指向下滑冻 上一页 第一页时到最后一页
          if (endY - startYRef.current > 100) {
            // 第几个高度index
            let index = multipleMath;
            if (multipleMath > 0) {
              index = multipleMath - 1;
            }
            // else {
            //   index = multipleMath;
            // }
            homePageDom.current.scroll({
              top: index * clientHeight,
              left: 0,
              behavior: "smooth",
            });
          }
          // 手指向上滑动 下一页 最后一页的时候恢复到第一页
          if (endY - startYRef.current < -100) {
            let index = multipleMath;
            if (multipleMath < 4) {
              index = multipleMath + 1;
            }
            homePageDom.current &&
              homePageDom.current.scroll({
                top: index * clientHeight,
                left: 0,
                behavior: "smooth",
              });
          }
        }
      });

      // 禁止滚动结束监听
      homePageDom.current.addEventListener("mousewheel", (e: Event) => {
        e.preventDefault();
      });

      // return () => {
      //   window.removeEventListener("touchstart", () => {});
      //   window.removeEventListener("touchend", () => {});
      // };
    }
  }, []);

  return (
    <>
      <div className={styles.home_box} ref={homePageDom}>
        <div ref={homeDom}>
          <Home />
        </div>
        <div ref={platformAdvDom}>
          <PlatformAdv />
        </div>
        {/* <div ref={ipfsDom}>
          <Ipfs />
        </div>
        <div ref={infomationDom}>
          <Infomation />
        </div> */}
        <div ref={aboutUsDom}>
          <AboutUs />
        </div>
      </div>
    </>
  );
}
