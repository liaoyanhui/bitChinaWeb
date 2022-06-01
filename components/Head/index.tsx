/*
 * @Description: HTML HEAD
 * @Author: 尚夏
 * @Date: 2021-06-22 10:10:46
 * @LastEditTime: 2022-04-27 17:35:11
 * @FilePath: /bit-china/components/Head/index.tsx
 */
import * as React from "react";
import Head from "next/head";
import { judge } from "../../utils";

interface HTMLHeadProps {
  title?: string;
}

export default function HTMLHead(props: HTMLHeadProps) {
  const { title } = props;

  const [isPc, setIsPc] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsPc(judge()); // 暂时 没看到起到作用
  }, []);

  return (
    <>
      <Head>
        <title>{title || "CloudWorld"}</title>
        {!isPc && (
          <meta
            name="viewport"
            content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,width=device-width,initial-scale=1.0"
          />
        )}
        {/* <meta name="description" content="杨林科," /> */}
        <meta
          name="keywords"
          // content="杨林科,CloudWorld,IPFS,filecoin,分布式存储,IPFS,分布式存储,分布式,FIL,星际文件系统,星际,FIL经济模型,FIL奖励,FIL减产,存储奖励,存储收益,协议实验室,星际文件系统基金会,IPFS生态,胡安,胡安贝内特,检索收益,IPFS网络,集群,集群方案,大数据中心,IDC数据中心,IDC机房"
          content="杨林科,CloudWorld,分布式存储,分布式,协议实验室,检索收益,集群,集群方案,大数据中心,IDC数据中心,IDC机房"
        />
      </Head>
    </>
  );
}
