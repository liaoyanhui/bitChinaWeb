/*
 * @Description: 分享
 * @Author: 尚夏
 * @Date: 2021-08-24 15:10:08
 * @LastEditTime: 2021-11-19 17:34:30
 * @FilePath: /bit-china/pages/app/index.tsx
 */

import React, { useEffect, useState, useRef } from "react";
import { phoneType, uploadDeviceInfo, isWeixin, Udid } from "../../utils";
import { request } from "../../utils/request";
import styles from "./app.module.scss";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

function Share({}) {
  const router = useRouter();

  const [type, setType] = useState<any>();
  const [isweixin, setIsweixin] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  // const [uploadData, setUploadData] = useState<object>({})

  const c = useRef(new Cookies());
  /**
   * @description: 设置cookie 存在就不重新生成
   * @param {*}
   * @return {*}
   */
  const setCookie = () => {
    // const cookies = new Cookies();
    const cookie = c.current.get("device_udid");
    if (!cookie) {
      const id = Udid();
      c.current.set("device_udid", id);
    }
  };

  useEffect(() => {
    // 判断android 还是 ios
    if (phoneType() === "ios") {
      setCookie();
    }
    setType(phoneType());

    // 判断是否微信端打开
    if (isWeixin()) {
      setIsweixin(true);
    } else {
      setIsweixin(false);
    }
    request(`/v1/app/releases/latest?platform=${phoneType() || "android"}`, {
      method: "GET",
    }).then((res: any) => {
      if (res.downloadURL) {
        setDownloadUrl(res.downloadURL);
      }
    });
  }, []);

  /**
   * @description: 下载
   * @param {*}
   * @return {*}
   */
  const handleDown = async () => {
    const query = router.query;
    if (type === "ios") {
      if (downloadUrl) {
        router.push({
          pathname: "/DownCourse",
          query: {
            referralCode: query.referralCode,
            deviceUdid: c.current.get("device_udid"),
            downloadUrl: downloadUrl,
          },
        });
      }

      // if (query.referralCode) {
      //   // const data = uploadDeviceInfo();
      //   request(
      //     `/enroll?referralCode=${
      //       query.referralCode
      //     }&deviceUDID=${c.current.get("device_udid")}`,
      //     {
      //       method: "POST",
      //     }
      //   ).then(() => {
      //     window.location.href = downloadUrl;
      //   });
      // } else {
      //   window.location.href = downloadUrl;
      // }
    }

    if (type === "android") {
      window.location.href = query.referralCode
        ? `${downloadUrl}?referralCode=${query.referralCode}`
        : downloadUrl;
    }
  };

  return (
    <div className={styles.share}>
      <img
        src="/static/images/DownloadAPP.png"
        alt="CloudWorld网络"
        className={styles.bg}
      />
      {/* {type === 'android' && (
        <div className={styles.btns}>
          {type === 'android' && <p onClick={handleDown}>Android版下载</p>}
          {type === 'ios' && <p onClick={handleDown}>IOS TestFlight版下载</p>}
        </div>
      )} */}
      <div className={styles.btns}>
        {type === "android" && <p onClick={handleDown}>Android版下载</p>}
        {type === "ios" && <p onClick={handleDown}>IOS 下载教程</p>}
      </div>
      {isweixin && (
        <div className={styles.modal}>
          <div className={styles.share_box}>
            <img
              src="/static/images/share_arrow.png"
              alt="CloudWorld"
              className={styles.share_arrow}
            />
            <div className={styles.tip}>点击右上角选择在浏览器中打开~~</div>
          </div>
        </div>
      )}
    </div>
  );
}

// export async function getStaticProps(context) {
//   // const [a, setA] = useState<any>('1')
//   // const data = {
//   //   mobile: "18329042960",
//   //   signinChallengeMethod: "sms",
//   //   signinChallengeResponse: "482017",
//   // };

//   // const res = await request(`/auth/signin/mobile`, {
//   //   method: "POST",
//   //   data: data,
//   // });

//   // const res = await request(
//   //   `http://192.168.50.213:8080/fil/client/v1/apk/download?platform_id=platformId_1`,
//   //   {
//   //     method: "GET",
//   //   }
//   // );

//   // console.log(res, "eee");
//   // // const posts = await res.json();

//   return {
//     props: {
//       posts: [],
//     },
//   };
// }

export default Share;
