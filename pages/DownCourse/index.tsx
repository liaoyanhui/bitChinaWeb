/*
 * @Description: 下载教程
 * @Author: 尚夏
 * @Date: 2021-11-19 15:18:14
 * @LastEditTime: 2022-03-08 11:03:02
 * @FilePath: /bit-china/pages/DownCourse/index.tsx
 */

import React from "react";
import styles from "./DownCourse.module.scss";
import toast, { Toaster } from "react-hot-toast";
import copy from "copy-to-clipboard";
import { request } from "../../utils/request";
import { useRouter } from "next/router";

export default function DownCourse() {
  const router = useRouter();

  const phoneList = [
    // {
    //   account: "fdbnbh4@icloud.com",
    //   password: "Ad112211",
    // },
    {
      account: "yvukd7@163.com",
      password: "Am112211",
    },
  ];
  const handleDown = () => {
    const query = router.query;
    const { referralCode = "", deviceUdid = "", downloadUrl = "" } = query;
    if (referralCode) {
      request(`/enroll?referralCode=${referralCode}&deviceUDID=${deviceUdid}`, {
        method: "POST",
      }).then(() => {
        (window as any).location.href = downloadUrl;
      });
    } else {
      (window as any).location.href = downloadUrl;
    }
  };
  return (
    <div className={styles.down_Course}>
      <h2>如何切换苹果ID</h2>
      <div className={styles.title}>1. 点击APP Store首页右上角头像</div>
      <img src="/static/images/down_course_1.png" alt="" />
      <div className={styles.title}>
        2. 点击退出登录，重新输入Apple ID及密码
      </div>
      <img src="/static/images/down_course_2.png" alt="" />
      <div className={styles.title}>
        3. 输入非大陆苹果账号，您可用以下账号及密码登录
      </div>
      <div className={styles.account}>
        <ul className={styles.account_title}>
          <li>Apple ID</li>
          <li>密码</li>
        </ul>
        {phoneList.map((item, index) => {
          const { account, password } = item;
          return (
            <ul className={styles.account_content} key={index}>
              <li
                onClick={() => {
                  copy(account);
                  if (copy(account)) {
                    toast("复制成功！");
                  }
                }}
              >
                {account}
              </li>
              <li
                onClick={() => {
                  copy(password);
                  if (copy(password)) {
                    toast("复制成功！");
                  }
                }}
              >
                {password}
              </li>
            </ul>
          );
        })}
      </div>
      <img src="/static/images/down_course_3.png" alt="" />
      <div className={`${styles.title} ${styles.tip}`}>
        4. 如果碰到账号认证提示，请务必按下图中的提示进行操作
      </div>
      <img src="/static/images/down_course_4.png" alt="" />
      <img src="/static/images/down_course_5.png" alt="" />
      <div className={styles.title}>
        5. 搜索安装CloudWorld App后，重新登录您自己的ID
      </div>
      <img src="/static/images/down_course_6.png" alt="" />
      <div className={styles.down}>
        <div className={styles.btn} onClick={handleDown}>
          我知道了，继续下载
        </div>
      </div>
      <Toaster />
    </div>
  );
}
