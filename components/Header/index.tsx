/*
 * @Description: 全局头部
 * @Author: 尚夏
 * @Date: 2021-06-21 18:23:03
 * @LastEditTime: 2022-04-28 09:37:23
 * @FilePath: /bit-china/components/Header/index.tsx
 */
import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";

interface HeaderProps {
  // isScroll: boolean; // 是否滚动了滚动条
  // headerClass?: any;
}

export default function Header(props: HeaderProps) {
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const handleDropMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // 跳转
  // const goTo = (route: string) => {
  //   setMenuVisible(!menuVisible);
  //   router.push(route);
  // };

  return (
    <>
      <header className={`${styles.header}`}>
        {/* <Image
          src={"/static/images/logo.svg"}
          alt="CloudWorld"
          height={40}
          width={136}
          className={`${styles.img_height}`}
        /> */}
        <img
          src="/static/images/logo_cloud.png"
          alt="CloudWorld"
          onClick={() => router.push("/")}
          style={{ height: 32 }}
        />
        <ul className={styles.ul_router}>
          <li>
            {/* <Link href="/"> */}
            <a href="#home" onClick={() => setMenuVisible(false)}>
              首页
            </a>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link href="/PlatformAdv"> */}
            <a href="#platformAdv" onClick={() => setMenuVisible(false)}>
              平台优势
            </a>
            {/* </Link> */}
          </li>
          {/* <li>
            <a href="#ipfs" onClick={() => setMenuVisible(false)}>
              IPFS
            </a>
          </li>
          <li>
            <a href="#infomation" onClick={() => setMenuVisible(false)}>
              相关资讯
            </a>
          </li> */}
          <li>
            {/* <Link href="/AboutUs"> */}
            <a href="#about_us" onClick={() => setMenuVisible(false)}>
              关于我们
            </a>
            {/* </Link> */}
          </li>
        </ul>
        <div className={styles.right_icon}>
          <img
            src="/static/images/menu.svg"
            alt="CloudWorld"
            onClick={handleDropMenu}
            style={{ width: 35, height: 20 }}
          />
          {menuVisible && (
            <ul className={styles.drop_menu}>
              <li>
                <a href="#home" onClick={() => setMenuVisible(false)}>
                  首页
                </a>
              </li>
              <li>
                <a href="#platformAdv" onClick={() => setMenuVisible(false)}>
                  平台优势
                </a>
              </li>
              {/* <li>
                <a href="#ipfs" onClick={() => setMenuVisible(false)}>
                  IPFS
                </a>
              </li>
              <li>
                <a href="#infomation" onClick={() => setMenuVisible(false)}>
                  相关资讯
                </a>
              </li> */}
              <li>
                <a href="#about_us" onClick={() => setMenuVisible(false)}>
                  关于我们
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}
