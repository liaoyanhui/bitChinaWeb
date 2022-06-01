/*
 * @Description: 协议
 * @Author: 尚夏
 * @Date: 2021-09-27 10:29:47
 * @LastEditTime: 2021-09-28 16:22:33
 * @FilePath: /bit-china/pages/agreement/index.tsx
 */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./agreement.module.scss";
import { request } from "../../utils/request";
import Cookies from "universal-cookie";

function Agreement({}) {
  const router = useRouter();

  const [agreement, setAgreement] = useState<any>({
    title: "",
    content: "",
  });

  // 绑定用户
  const refererBind = (token: any) => {
    const cookies = new Cookies();
    const cookie = cookies.get("device_udid");
    if (cookie) {
      request(`/v1/referrer/bind?deviceUDID=${cookie}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res: any) => {
        // 绑定成功 移除udid
        cookies.remove("device_udid");
      });
    }
  };

  useEffect(() => {
    const { agreementId, token } = router.query;
    if (agreementId && token) {
      refererBind(token);
      request(`/v1/platform/agreements/${agreementId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res: any) => {
        if (res) {
          setAgreement({
            title: res.title,
            content: res.content,
          });
        }
      });
    }
  }, [router.query]);

  return (
    <div className={styles.agreement}>
      <p className={styles.title}>{agreement.title}</p>
      <div
        dangerouslySetInnerHTML={{ __html: agreement.content }}
        className={styles.content}
      ></div>
      <div
        className={styles.btn}
        onClick={() => {
          window.location.href = "cloudworld://";
        }}
      >
        我已阅读并同意此条款，返回APP
      </div>
    </div>
  );
}

export default Agreement;
