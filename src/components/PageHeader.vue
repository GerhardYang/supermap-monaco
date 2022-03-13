<!--
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-03-13 00:12:57
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-03-13 23:39:39
 * @Description: file content
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
-->
<template>
  <div class="page-header">
    <span class="left">
      <a-button type="link" @click="goHome">
        <HomeOutlined class="home-btn"
      /></a-button>
      <span class="title">SuperMap Cesium Demo</span>
    </span>
    <span class="right">
      <span class="version"> Cesium.Version:{{ Cesium.VERSION }}</span>
      <span class="version">SuperMapVersion:{{ Cesium.SuperMapVersion }}</span>
      <a-button type="link" @click="goHome">
        <a href=""><GithubOutlined class="github" /></a>
      </a-button>
    </span>
  </div>
</template>

<script>
import { HomeOutlined, GithubOutlined } from "@ant-design/icons-vue";

export default {
  data() {
    return {
      Cesium: window.Cesium,
    };
  },
  components: {
    HomeOutlined,
    GithubOutlined,
  },
  methods: {
    goHome() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.page-header {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #212121;
  width: 100vw;
  height: 60px;

  .title,
  .home-btn,
  .version,
  .github {
    font-size: 20px;
    color: #ffffff;
    font-family: "Microsoft Yahei";
    line-height: 60px;
    user-select: none;
    margin-left: 20px;
  }

  .version {
    font-size: 16px;
  }
  .github {
    margin-right: 20px;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
}
</style>
