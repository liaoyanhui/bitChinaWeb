/*
 * @Description:
 * @Author: 尚夏
 * @Date: 2021-08-17 16:42:19
 * @LastEditTime: 2021-08-30 14:56:47
 * @FilePath: /bit-china/pages/PlatformAdv/index.tsx
 */

import React, { useEffect, useState, useRef } from "react";
import { judge } from "../../utils";
import styles from "./PlatformAdv.module.scss";

export default function PlatformAdv() {
  const [isPc, setIsPc] = useState<boolean>(true);

  useEffect(() => {
    setIsPc(judge());
  }, []);

  return (
    <div id="platformAdv">
      <div className={styles.platform_adv}>
        <img
          src={isPc ? "/static/images/bg.png" : "/static/images/mobile_bg.png"}
          alt="CloudWorld"
          className={styles.bg}
        />
        <img
          src="/static/images/home_cloud_world.png"
          alt="CloudWorld"
          className={styles.home_cloud_world}
        />
        <img
          src="/static/images/advantage_circle.svg"
          alt="CloudWorld"
          className={styles.advantage_circle}
        />
        <ul className={styles.list}>
          <li>
            <div className={styles.list_info}>
              <div className={styles.explain}>
                平台提供专业的技术团队保障算力安全，高效的产能满足全球用户算力需求。
              </div>
              <div className={styles.line}></div>
            </div>
            <div className={`${styles.list_title}`}>安全高效</div>
          </li>
          <li>
            <div className={styles.list_info}>
              <div className={styles.explain}>
                CloudWorld的核心高管具备长达10年的区块链相关领域的从业经验，对云存储领域也有着丰富的经验。
              </div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.list_title}>经验丰富</div>
          </li>
          <li>
            <div className={styles.list_info}>
              <div className={styles.explain}>
                7x24小时全方位实时监控，配合完善的风控管理系统，保障用户资金资产安全。
              </div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.list_title}>7*24H</div>
          </li>
          <li>
            <div className={styles.list_info}>
              <div className={styles.explain}>
                CloudWorld的服务器具备多级灾备预案，自如应对各类情况。
              </div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.list_title}>系统稳定</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
