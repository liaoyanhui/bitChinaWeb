/*
 * @Description: 相关资讯
 * @Author: 尚夏
 * @Date: 2021-08-18 10:56:27
 * @LastEditTime: 2021-08-30 14:56:31
 * @FilePath: /bit-china/pages/Infomation/index.tsx
 */

import React, { useEffect, useState } from "react";
import styles from "./Infomation.module.scss";
import Image from "next/image";
import { judge } from "../../utils";
// import newImg from "/public/static/images/news.png";

export default function Infomation() {
  const [isPc, setIsPc] = useState<boolean>(true);

  useEffect(() => {
    setIsPc(judge());
  }, []);

  return (
    <div id="infomation">
      <div className={styles.infomation}>
        <img
          src={isPc ? "/static/images/bg.png" : "/static/images/mobile_bg.png"}
          alt="CloudWorld"
          className={styles.bg}
        />
        <img
          src="/static/images/info_earth.png"
          alt="CloudWorld"
          className={styles.info_earth}
        />
        {/* pc端 */}
        <div className={styles.container}>
          <ul className={styles.list}>
            <li
              onClick={() =>
                window.open("https://mp.weixin.qq.com/s/dQ7L_VbGMYG4HMlxAXXgaQ")
              }
            >
              CloudWorld视角 |
              Facebook加码元宇宙，赋能有效数据存储，IPFS价值无限
            </li>
            <li
              onClick={() =>
                window.open("https://mp.weixin.qq.com/s/e6vY_F1D71seHYpsYsNVhw")
              }
            >
              CloudWorld杨林科:区块链老兵勇闯IPFS
            </li>
            <li
              onClick={() =>
                window.open("https://mp.weixin.qq.com/s/kwLTPumzBXnUfgIuHxBT_A")
              }
            >
              CloudWorld喜报 |
              CloudWorld新增合作大数据中心，运维水平高于全网平均值
            </li>
            <li
              onClick={() =>
                window.open("https://mp.weixin.qq.com/s/QAF3Akh1_WcQHKCBBPOJtQ")
              }
            >
              CloudWorld喜报 |CloudWorld新增5PiB企业级客户订单，现有算力已超30P!
            </li>
            <li
              onClick={() =>
                window.open("https://mp.weixin.qq.com/s/AH1rOVqvaXJR-5t9JvXrNA")
              }
            >
              CloudWorld创始人兼CEO杨林科受邀参加“2021世界区块链大会·杭州”并发表精彩演讲
            </li>
          </ul>
          <div className={styles.news}>
            {/* <Image
              src="/static/images/news.png"
              alt="CloudWorld"
              width={2230}
              height={1793}
            /> */}
            <img
              src="/static/images/news.png"
              alt="CloudWorld"
              className={styles.news_img}
            />
            {/* <img src={newImg} alt="CloudWorld" className={styles.news_img} /> */}
            <div className={styles.news_info}>
              <p style={{ fontSize: "5.6rem" }}>NEWS</p>
              <p className={styles.line}></p>
              <p style={{ fontSize: "3.2rem" }}>CloudWorld资讯</p>
            </div>
          </div>
        </div>

        {/* 手机端 */}
        <div className={styles.mobile_container}>
          <div className={styles.news}>
            {/* <Image
              priority={true}
              src={"/static/images/mobile_news.png"}
              alt="CloudWorld"
              width={3743}
              height={1793}
            /> */}
            <img
              src="/static/images/mobile_news.png"
              alt="CloudWorld"
              className={styles.news_img}
            />
            <div className={styles.news_info}>
              <p style={{ fontSize: "5.6rem" }}>NEWS</p>
              <p className={styles.line}></p>
              <p style={{ fontSize: "3.2rem" }}>CloudWorld资讯</p>
            </div>
          </div>
          <ul className={styles.list}>
            <li
              onClick={() =>
                window.open("https://mp.weixin.qq.com/s/dQ7L_VbGMYG4HMlxAXXgaQ")
              }
            >
              CloudWorld视角 |
              Facebook加码元宇宙，赋能有效数据存储，IPFS价值无限
            </li>
            <li
              onClick={() =>
                window.open("https://mp.weixin.qq.com/s/e6vY_F1D71seHYpsYsNVhw")
              }
            >
              CloudWorld杨林科:区块链老兵勇闯IPFS
            </li>
            <li
              onClick={() =>
                window.open("https://mp.weixin.qq.com/s/kwLTPumzBXnUfgIuHxBT_A")
              }
            >
              CloudWorld喜报 |
              CloudWorld新增合作大数据中心，运维水平高于全网平均值
            </li>
            <li
              onClick={() =>
                window.open("https://mp.weixin.qq.com/s/QAF3Akh1_WcQHKCBBPOJtQ")
              }
            >
              CloudWorld喜报 |CloudWorld新增5PiB企业级客户订单，现有算力已超30P!
            </li>
            <li
              onClick={() =>
                window.open("https://mp.weixin.qq.com/s/AH1rOVqvaXJR-5t9JvXrNA")
              }
            >
              CloudWorld创始人兼CEO杨林科受邀参加“2021世界区块链大会·杭州”并发表精彩演讲
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
