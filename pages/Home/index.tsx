/*
 * @Description: 首页
 * @Author: 尚夏
 * @Date: 2021-08-22 12:37:12
 * @LastEditTime: 2021-08-30 14:55:37
 * @FilePath: /bit-china/pages/Home/index.tsx
 */

import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.scss";
import { judge } from "../../utils";
// import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";

SwiperCore.use([Pagination, Autoplay]);

export default function App() {
  const [isPc, setIsPc] = useState<boolean>(true);

  useEffect(() => {
    setIsPc(judge());
  }, []);

  return (
    <div id="home">
      <Swiper
        // direction={"vertical"}
        pagination={{
          clickable: true,
          bulletActiveClass: "my-bullet-active",
          bulletClass: "my-bullet",
        }}
        centeredSlides={true}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <div className={styles.swiper_1}>
            <img
              src={
                isPc
                  ? "/static/images/bg_swiper_1.png"
                  : "/static/images/mobile_bg.png"
              }
              alt="CloudWorld"
              className={styles.bg}
            />
            <img
              src="/static/images/home_swiper_1.svg"
              alt="CloudWorld"
              className={styles.home_swiper_1}
            />
            <img
              src="/static/images/home_cloud_world.png"
              alt="CloudWorld"
              className={styles.home_cloud_world_2}
            />
            <div className={styles.slogan_1}>
              <div className={styles.title}>
                <p>CloudWorld</p>
                <p className={styles.line}></p>
              </div>
              <div className={styles.info}>
                <p>聚焦于区块链分布式存储</p>
                <p>的基础设施建设</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.swiper_2}>
            <img
              src={
                isPc
                  ? "/static/images/bg_swiper_2.png"
                  : "/static/images/mobile_bg.png"
              }
              alt="CloudWorld"
              className={styles.bg}
            />
            <img
              src="/static/images/home_swiper_2.svg"
              alt="CloudWorld"
              className={styles.home_cloud_world}
            />
            <img
              src="/static/images/home_cloud_world.png"
              alt="CloudWorld"
              className={styles.home_cloud_world_2}
            />
            <div className={styles.swiper_info}>
              <p className={styles.info_line}></p>
              <p>为客户提供安全合规</p>
              <p>可信效率的分布式存储解决方案</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
