/*
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-03-13 22:25:35
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-03-20 21:45:11
 * @Description: file contentconst
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
 */
window.supermap_config.map = {
  name: "加载各种地图",
  demos: [
    {
      name: "内置api加载天地图",
      url: "./demos/map/TDTmap1.html",
      imgSrc: "./imgs/map/TDTmap1.png",
      detail: "使用内置api加载天地图在线地图",
    },
    {
      name: "WMTS加载天地图",
      url: "./demos/map/TDTmap2.html",
      imgSrc: "./imgs/map/TDTmap2.png",
      detail: "使用WMTS方式加载天地图在线地图",
    },
    {
      name: "加载MVT矢量瓦片",
      url: "./demos/map/MVTmap.html",
      imgSrc: "./imgs/map/MVTmap.png",
      detail: "加载iServer发布的MVT矢量瓦片",
    },
    {
      name: "加载百度地图",
      url: "./demos/map/TDTmap3.html",
      imgSrc: "./imgs/map/TDTmap3.png",
      detail: "加载在线百度地图瓦片并纠偏到wgs84坐标系",
    },
  ],
};
