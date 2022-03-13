<!--
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-03-12 23:14:00
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-03-13 13:40:24
 * @Description: file content
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
-->
<template>
  <PageHeader />
  <DemoContent />
</template>

<script>
// @ is an alias to /src
import PageHeader from "../components/PageHeader.vue";
import DemoContent from "@/components/DemoContent.vue";

export default {
  components: {
    PageHeader,
    DemoContent,
  },
};
</script>
