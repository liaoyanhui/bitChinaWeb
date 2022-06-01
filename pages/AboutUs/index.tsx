/*
 * @Description: 关于我们
 * @Author: 尚夏
 * @Date: 2021-08-18 15:46:52
 * @LastEditTime: 2022-04-27 17:17:03
 * @FilePath: /bit-china/pages/AboutUs/index.tsx
 */

import React, { useEffect, useState } from "react";
import styles from "./AboutUs.module.scss";
// import { useRouter } from "next/router";
import { getRandom, judge } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";

SwiperCore.use([Pagination, Autoplay]);

export default function AboutUs() {
  const [isPc, setIsPc] = useState<boolean>(true);

  const [number, setNumber] = React.useState<string>();

  React.useEffect(() => {
    const codeNumber = getRandom();
    setNumber(codeNumber);
  }, []);

  useEffect(() => {
    setIsPc(judge());
  }, []);

  const switchCode = (random: any) => {
    switch (random) {
      case "0":
        return (
          <img
            src="/static/images/shitianyu.png"
            alt=""
            className={styles.code}
          />
        );
      case "1":
        return (
          <img
            src="/static/images/liangyong.png"
            alt=""
            className={styles.code}
          />
        );
      case "2":
        return (
          <img
            src="/static/images/luwengting.png"
            alt=""
            className={styles.code}
          />
        );
      case "3":
        return (
          <img
            src="/static/images/tongming.png"
            alt=""
            className={styles.code}
          />
        );
      case "4":
        return (
          <img
            src="/static/images/wenyihao.png"
            alt=""
            className={styles.code}
          />
        );
      case "5":
        return (
          <img
            src="/static/images/wenzhenghuan.png"
            alt=""
            className={styles.code}
          />
        );
      case "6":
        return (
          <img
            src="/static/images/zhangqingqing.png"
            alt=""
            className={styles.code}
          />
        );
      default:
        return (
          <img
            src="/static/images/shitianyu.png"
            alt=""
            className={styles.code}
          />
        );
    }
  };
  return (
    <div id="about_us">
      <div className={styles.about_us}>
        <img
          src={
            isPc
              ? "/static/images/about_us.png"
              : "/static/images/mobile_bg.png"
          }
          alt="CloudWorld"
          className={styles.bg}
        />
        <div className={styles.container}>
          <ul className={styles.left}>
            {/* <li className={styles.down}>
              <img
                src="/static/images/app_down_new.png"
                alt=""
                className={styles.code}
              />
              <span
                className={styles.app_down}
                onClick={() =>
                  window.open(
                    "https://www.yunjieipfs.com/app"
                  )
                }
              >
                App下载
              </span>
              <div className={styles.app_down_line}></div>
            </li> */}
            <li>
              <div className={styles.switch}>
                <img
                  src="/static/images/twitter_log.png"
                  alt=""
                  className={styles.small_log}
                />
                <img
                  src="/static/images/twitter.png"
                  alt=""
                  className={styles.code}
                />
              </div>
            </li>
            <li>
              <div className={styles.switch}>
                <img
                  src="/static/images/email_log.png"
                  alt=""
                  className={styles.small_log}
                />
                <img
                  src="/static/images/public_account.png"
                  alt=""
                  className={styles.code}
                />
              </div>
            </li>
            <li>
              <div className={styles.switch}>
                <img
                  src="/static/images/telegram_log.png"
                  alt=""
                  className={styles.small_log}
                />
                <img
                  src="/static/images/telegram_zhang.png"
                  alt=""
                  className={styles.code}
                />
              </div>
            </li>
            <li>
              <div className={styles.switch}>
                <img
                  src="/static/images/telegram_log.png"
                  alt=""
                  className={styles.small_log}
                />
                <img
                  src="/static/images/telegram_abner005.png"
                  alt=""
                  className={styles.code}
                />
              </div>
            </li>

            {/* <li>
              {switchCode(number)}
              <span>商务代理企业号</span>
            </li> */}
          </ul>
          {/* <div className={styles.right}>
            <p className={styles.line}></p>
            <img
              src="/static/images/email.svg"
              alt=""
              className={styles.email}
            />
            <div className={styles.email_title}>
              <p>客服邮箱：</p>
              <p>support@yunjieipfs.com</p>
            </div>
          </div> */}
        </div>
        {/* <div>助力人类数据永存</div> */}
        <div className={styles.about_swiper}>
          <Swiper
            direction={"vertical"}
            centeredSlides={true}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className={styles.slide_item}>助力人类数据永存</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide_item}>
                引领全球卓越领袖共建分布式存储生态
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide_item}>
                客户至上 诚信共赢 稳健经营
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
