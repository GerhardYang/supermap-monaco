/*
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-03-12 23:14:00
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-03-12 23:52:26
 * @Description: file content
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(store).use(router).use(Antd).mount("#app");
