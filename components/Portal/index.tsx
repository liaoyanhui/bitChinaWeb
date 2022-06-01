/*
 * @Description:
 * @Author: 尚夏
 * @Date: 2021-06-25 16:12:18
 * @LastEditTime: 2021-06-25 16:14:32
 * @FilePath: /bit-china/components/Portal/index.tsx
 */

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface protalProps {
  children?: any;
  selector?: any;
}
// 传送门构造器
export default function Protal(props: protalProps) {
  const { children, selector } = props;
  const ref: { current: any } = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 获取传送门挂载点
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}
