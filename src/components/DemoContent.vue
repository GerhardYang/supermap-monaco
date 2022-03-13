<!--
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-03-12 23:14:00
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-03-13 23:15:31
 * @Description: file content
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
-->
<template>
  <div class="main-content">
    <div v-for="(item, index) in config" :key="index">
      <a-divider orientation="left">{{ item.name }}</a-divider>
      <a-row type="flex" justify="start">
        <a-col
          class="demo"
          :span="4"
          v-for="(item, index) in item.demos"
          :key="index"
        >
          <a-card hoverable class="demo-card" @click="showDemo(item.url)">
            <template #cover>
              <img :src="item.imgSrc" />
            </template>
            <a-card-meta :title="item.name">
              <template #description>{{ item.detail }}</template>
            </a-card-meta>
          </a-card>
          <span></span>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: window.supermap_config,
    };
  },
  methods: {
    showDemo(url) {
      this.$router.push({
        path: "/code",
        query: {
          file: url,
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-content {
  margin-top: 80px;
}
.demo {
  margin-bottom: 20px;
}
.demo-card {
  width: 240px;
  margin: 0 auto;
}
</style>
