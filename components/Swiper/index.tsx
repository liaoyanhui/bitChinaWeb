/*
 * @Description: 轮播图插件
 * @Author: 尚夏
 * @Date: 2021-06-24 17:47:37
 * @LastEditTime: 2021-07-19 15:28:04
 * @FilePath: /bit-china/components/Swiper/index.tsx
 */

/**
 * 无缝轮播流程
 * 1、获取视图需要显示的图片个数n， 复制0到(n-1)的图片 拼接到整个图片列表后面 获取总数total
 * 2、从0到(total-1) 图片点击次数 为 原先图片的个数n
 * 3、计算点击(翻页)n+1次后 先禁止过渡然后将图片位置重置 重置完成后 开启动画 然后执行翻页
 */

import * as React from "react";
import styles from "./index.module.scss";

interface SwiperProps {
  children: React.ReactChild[]; // children
  className?: string; // banner盒子央视
  showNumber: number; // 屏幕显示个数
  haveSpace?: boolean; // 是否有空隙
  interspace?: number; // 空隙大小 如果 haveSpace true 才起作用
  nextIcon?: React.ReactNode | string; // 下一个按钮 图片或者字符串
}

export default function Swiper(props: SwiperProps) {
  const {
    className,
    children = [],
    showNumber = 1,
    haveSpace,
    interspace = 1,
    nextIcon,
  } = props;

  const [leftNum, setLeftNum] = React.useState<number>(0);
  const [clientWidth, setClientWidth] = React.useState<number>(0);
  // const [showTransition, setTransition]: [boolean, any] = React.useState(true);
  const [itemWidth, setItemWidth] = React.useState<number>(1);
  const [cloneChildren, setCloneChildren]: [React.ReactChild[], any] =
    React.useState(children);

  const swiperRef = React.useRef<HTMLDivElement>(null);
  // 点击次数
  const nextRef = React.useRef<number>(0);
  // 是否显示动画
  const showTrans = React.useRef<boolean>(true);

  // 监听窗口变换
  React.useEffect(() => {
    window.addEventListener("resize", _handleResize);
    return () => {
      window.removeEventListener("resize", _handleResize);
    };
  }, []);

  // 窗口改变监听 重新调整swiper
  const _handleResize = (e: any) => {
    // 变化后需要做的事
    if (swiperRef && swiperRef.current) {
      let clientWidth = swiperRef.current.clientWidth;
      setClientWidth(clientWidth);
    }
  };

  // 设置单个item的宽度
  React.useEffect(() => {
    if (swiperRef && swiperRef.current) {
      let width = clientWidth || swiperRef.current.clientWidth;
      if (haveSpace) width = width - (showNumber - 1) * interspace;
      setItemWidth(width / showNumber);
    }
  }, [clientWidth, showNumber, haveSpace, interspace]);

  // 监听showNumber 来复制图片
  React.useEffect(() => {
    setCloneChildren([...children, ...children.slice(0, showNumber)]);
  }, [showNumber, children]);

  // 下一个 计算点击(翻页)n+1次后 先禁止过渡然后将图片位置重置 重置完成后 开启动画 然后执行翻页
  const _handleNext = () => {
    if (nextRef.current === children.length) {
      // alert(1);
      showTrans.current = false;
      nextRef.current = 0;
      setLeftNum(0);
      // 利用js 的 event-loop, 实现无感切换复制图片到真实图片的切换
      setTimeout(() => {
        showTrans.current = true;
        setLeftNum(1);
        nextRef.current = 1;
      }, 10);
    } else {
      nextRef.current++;
      setLeftNum(leftNum + 1);
    }
  };

  return (
    <div className={`${styles.swiper_box}`}>
      <div className={`${className} ${styles.swiper_box}`}>
        <div className={`${styles.swiper}`} ref={swiperRef}>
          <div
            className={`${styles.swpier_scroll} ${
              showTrans.current && styles.swiper_scroll_transition
            }`}
            style={{
              left: `${
                leftNum > 0 ? -((itemWidth + interspace) * leftNum) : 0
              }px`,
            }}
          >
            {cloneChildren?.map((item: React.ReactChild, index: number) => {
              let styles: React.CSSProperties = { width: itemWidth + "px" };
              if (index !== 0) {
                styles.marginLeft = interspace + "px";
              }
              return React.cloneElement(<div>{item}</div>, {
                style: { ...styles },
                key: index,
              });
            })}
          </div>
        </div>
      </div>
      <div className={styles.nextBtn} onClick={_handleNext}>
        {nextIcon || "下一个"}
      </div>
    </div>
  );
}
