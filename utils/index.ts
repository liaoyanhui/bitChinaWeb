/*
 * @Description:
 * @Author: 尚夏
 * @Date: 2021-06-25 16:51:38
 * @LastEditTime: 2021-09-26 20:00:22
 * @FilePath: /bit-china/utils/index.ts
 */
// import React from "react";
const os = require("os");
// const udid = require("udid");
import uuid from "node-uuid";
// const Koa = require("koa");

/**
 * 设置localStorage
 */
export const setStore = (name: string, content: any) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = (name: string) => {
  if (!name) return;
  // console.log(global.localStorage.getItem("ally-supports-cache"));
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = (name: string) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

// 判断当前是否是pc
export function judge() {
  let userAgentInfo = navigator.userAgent;
  let Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",

    "iPad",
    "iPod",
    "BlackBerry",
    "webOS",
  ]; //  判断是否是这几个系统
  let isPC = true;
  // alert(userAgentInfo);
  // console.log(userAgentInfo, "userA");
  for (let i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      isPC = false;
      // alert(isPC);
      break;
    }
  }
  return isPC;
}

/**
 * @description: 判断android 还是 ios
 * @param {*}
 * @return {*}
 */
export function phoneType() {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android安卓
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios苹果
  if (isAndroid) {
    return "android";
  }

  if (isiOS) {
    return "ios";
  }
  return null;
}

// 抛出随机数0 或 1, 2, 3, 4, 5, 6 来随机出现商务二维码
export const getRandom = () => {
  const arr = ["0", "1", "2", "3", "4", "5", "6"];
  let codeNumber: any = getStore("code_number");
  if (arr.findIndex((i) => i === codeNumber) === -1) {
    codeNumber = Math.floor(Math.random() * 7);
    setStore("code_number", codeNumber);
    return String(codeNumber);
  }
  return codeNumber;
};

const getBrowserInfo = (userAgent: string) => {
  let agent = userAgent.toLowerCase();
  let regStr_ie = /msie [\d.]+;/gi;
  let regStr_ff = /firefox\/[\d.]+/gi;
  let regStr_chrome = /chrome\/[\d.]+/gi;
  let regStr_saf = /appleWebkit\/[\d.]+/gi;
  //IE
  if (agent.indexOf("msie") > 0) {
    return agent.match(regStr_ie);
  }
  //firefox
  if (agent.indexOf("firefox") > 0) {
    return agent.match(regStr_ff);
  }
  //Chrome
  if (agent.indexOf("chrome") > 0) {
    return agent.match(regStr_chrome);
  }
  //Safari
  if (agent.indexOf("apple") > 0 && agent.indexOf("chrome") < 0) {
    return agent.match(regStr_saf);
  }
};

const userAgentInfo = () => {
  let agent = navigator.userAgent.toLowerCase();
  const agentArr = agent.split(" ");
  const mobileArr = agentArr.filter((item) => item.indexOf("mobile") !== -1);
  let data: any = {};
  data.renderingEngine =
    // @ts-ignore
    getBrowserInfo(agent) && getBrowserInfo(agent).length > 0
      ? // @ts-ignore
        getBrowserInfo(agent)[0]
      : null;
  data.enhancements = mobileArr.length > 0 ? mobileArr[0] : null;
  if (agent.indexOf("iphone") !== -1) {
    data.platformVersion = agent.split(" ")[5].split("_").join(".");
  }
  console.log(data, "mmmm");

  return data;
};

/**
 * @description:  抛出用户设备信息
 * @param {*}
 * @return {*}
 */
export const uploadDeviceInfo = (): object => {
  return {
    userAgent: navigator.userAgent,
    deviceLanguage: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timeZoneOffset: "UTC+" + (0 - new Date().getTimezoneOffset() / 60),
    screenResolution:
      window.screen.availWidth *
      window.devicePixelRatio *
      window.screen.availHeight *
      window.devicePixelRatio,
  };
};

// 判断当前是否是微信
export const isWeixin = (): any => {
  //判断是否是微信
  var ua = navigator.userAgent.toLowerCase();
  const bol = ua.match(/MicroMessenger/i);
  return bol;
};

// node 生成随机数 用来用户绑定
export const Udid = () => {
  return uuid.v4();
};
