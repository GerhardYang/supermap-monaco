/*
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-03-13 22:25:35
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-03-19 20:52:41
 * @Description: file contentconst
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
 */
window.supermap_config = {};
window.supermap_config.base = {
  name: "基本使用",
  demos: [
    {
      name: "初始化场景",
      url: "./demos/base/InitViewer.html",
      imgSrc: "./imgs/base/InitViewer.png",
      detail: "使用new Cesium.Viewer()初始化场景",
    },
    {
      name: "隐藏Logo",
      url: "./demos/base/copyRight.html",
      imgSrc: "./imgs/base/copyRight.png",
      detail: "隐藏超图版权logo图片",
    },
    {
      name: "调整罗盘位置",
      url: "./demos/base/Navigation.html",
      imgSrc: "./imgs/base/Navigation.png",
      detail: "调整内置的罗盘位置",
    },
  ],
};
