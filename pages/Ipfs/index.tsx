/*
 * @Description: ipfs
 * @Author: 尚夏
 * @Date: 2021-08-18 09:40:58
 * @LastEditTime: 2021-08-30 14:56:39
 * @FilePath: /bit-china/pages/IPFS/index.tsx
 */

import React, { useEffect, useState } from "react";
import { judge } from "../../utils";
import styles from "./Ipfs.module.scss";

export default function Ipfs() {
  const [isPc, setIsPc] = useState<boolean>(true);

  useEffect(() => {
    setIsPc(judge());
  }, []);

  return (
    <div id="ipfs">
      <div className={styles.ipfs}>
        <img
          src={isPc ? "/static/images/bg.png" : "/static/images/mobile_bg.png"}
          alt="CloudWorld"
          className={styles.bg}
        />
        <img
          src="/static/images/earth.svg"
          alt="CloudWorld"
          className={styles.earth}
        />
        <div className={styles.container}>
          <div className={styles.top}>
            <img
              src="/static/images/ipfs.png"
              alt="CloudWorld"
              className={styles.ipfs_img}
            />
            <p className={styles.ipfs_title}>InterPlanetary File System</p>
            <div className={styles.slogan}>
              <img
                src="/static/images/line_left.svg"
                alt="CloudWorld"
                className={styles.line_left}
              />
              <p>旨在创建持久且分布式存储和共享文件的网络传输协议</p>
              <img
                src="/static/images/line_right.svg"
                alt="CloudWorld"
                className={styles.line_right}
              />
            </div>
          </div>
          {/* pc端 */}
          <ul className={styles.list}>
            <li>
              <p className={styles.list_content}>
                IPFS的容错机制保证数据复制并存放在不同的地区，极大地保证了存储在IPFS上的数据的安全性和永久性。
              </p>
              <div className={styles.list_tip}>
                <span className={styles.list_title}>去中心化存储</span>
                <p className={styles.line}></p>
              </div>
            </li>
            <li>
              <p className={styles.list_content}>
                IPFS通过将计算引入数据，运用密码学原理加密可以完美的解决数据隐私安全问题。
              </p>
              <div className={styles.list_tip}>
                <span className={styles.list_title}>数据隐私性</span>
                <p className={styles.line}></p>
              </div>
            </li>
            <li>
              <p className={styles.list_content}>
                数据传输速度方面，所有存储者会同时发送保存的那一小块数据，并且点对点的下载方式能节省带宽使用成本。
              </p>
              <div className={styles.list_tip}>
                <span className={styles.list_title}>传输速度快</span>
                <p className={styles.line}></p>
              </div>
            </li>
          </ul>
          {/* 手机端 */}
          <ul className={styles.phone_list}>
            <li>
              <div className={styles.list_tip}>
                <span className={styles.list_title}>去中心化存储</span>
                <p className={styles.line}></p>
              </div>
              <p className={styles.list_content}>
                IPFS的容错机制保证数据复制并存放在不同的地区，极大地保证了存储在IPFS上的数据的安全性和永久性。
              </p>
            </li>
            <li>
              <div className={styles.list_tip}>
                <span className={styles.list_title}>数据隐私性</span>
                <p className={styles.line}></p>
              </div>
              <p className={styles.list_content}>
                IPFS通过将计算引入数据，运用密码学原理加密可以完美的解决数据隐私安全问题。
              </p>
            </li>
            <li>
              <div className={styles.list_tip}>
                <span className={styles.list_title}>传输速度快</span>
                <p className={styles.line}></p>
              </div>
              <p className={styles.list_content}>
                数据传输速度方面，所有存储者会同时发送保存的那一小块数据，并且点对点的下载方式能节省带宽使用成本。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
